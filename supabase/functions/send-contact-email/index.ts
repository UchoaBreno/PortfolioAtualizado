import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // Max requests per window
const RATE_WINDOW = 60 * 1000; // 1 minute in milliseconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }
  
  if (record.count >= RATE_LIMIT) {
    return true;
  }
  
  record.count++;
  return false;
}

// Input validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muito longo"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(2000, "Mensagem muito longa"),
});

// Sanitize HTML to prevent injection
function sanitizeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-contact-email");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const clientIP = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
                     req.headers.get("cf-connecting-ip") || 
                     "unknown";
    
    if (isRateLimited(clientIP)) {
      console.warn(`Rate limit exceeded for IP: ${clientIP}`);
      return new Response(
        JSON.stringify({ error: "Muitas requisições. Tente novamente em alguns minutos." }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Parse and validate input
    const rawData = await req.json();
    const validationResult = contactSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessage = validationResult.error.errors[0]?.message || "Dados inválidos";
      console.error("Validation failed:", errorMessage);
      return new Response(
        JSON.stringify({ error: errorMessage }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const { name, email, message } = validationResult.data;
    const safeName = sanitizeHtml(name);
    const safeMessage = sanitizeHtml(message);

    // Send notification email to the portfolio owner
    const notificationEmail = await resend.emails.send({
      from: "Portfolio Contato <onboarding@resend.dev>",
      to: ["uchoa.breno2016@gmail.com"],
      subject: `Nova mensagem de contato: ${safeName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #14b8a6; border-bottom: 2px solid #14b8a6; padding-bottom: 10px;">
            Nova Mensagem de Contato
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${safeName}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 0;"><strong>Mensagem:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${safeMessage.replace(/\n/g, "<br>")}
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Esta mensagem foi enviada através do formulário de contato do seu portfólio.
          </p>
        </div>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to the sender
    const confirmationEmail = await resend.emails.send({
      from: "Breno Uchôa <onboarding@resend.dev>",
      to: [email],
      subject: "Recebi sua mensagem!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #14b8a6;">Olá, ${safeName}!</h2>
          
          <p>Obrigado por entrar em contato através do meu portfólio.</p>
          
          <p>Recebi sua mensagem e responderei o mais breve possível.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #666;"><strong>Sua mensagem:</strong></p>
            <p style="margin-top: 10px;">${safeMessage.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p>Atenciosamente,<br><strong>Breno Uchôa</strong></p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p style="color: #666; font-size: 12px;">
            Desenvolvedor Web | Frontend & Backend
          </p>
        </div>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails enviados com sucesso" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
