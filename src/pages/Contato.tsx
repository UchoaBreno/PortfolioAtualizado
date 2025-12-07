import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/UchoaBreno',
    username: '@UchoaBreno',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/breno-uch%C3%B4a-5ba8a8214/',
    username: '/in/breno-uchôa',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:uchoa.breno2016@gmail.com',
    username: 'uchoa.breno2016@gmail.com',
  },
];

const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/curriculo-breno-uchoa.pdf';
  link.download = 'Curriculo_Breno_Uchoa.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Contato() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: 'Mensagem enviada!',
        description: 'Obrigado pelo contato. Responderei em breve.',
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Erro ao enviar',
        description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <SectionTitle
            title="Entre em Contato"
            subtitle="Tem um projeto em mente? Vamos conversar sobre como posso ajudar."
            centered
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    placeholder="Conte sobre seu projeto ou ideia..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Social Links */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <h3 className="font-semibold mb-6">Outras formas de contato</h3>
                <div className="space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <social.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{social.label}</p>
                        <p className="text-sm text-muted-foreground">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Download CV */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-transparent rounded-xl border border-primary/20">
                <h3 className="font-semibold mb-2">Baixar Currículo</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Faça o download do meu currículo completo.
                </p>
                <Button variant="outline" className="w-full" onClick={handleDownloadCV}>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>

              {/* Availability */}
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-green-500">
                    Disponível para projetos
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Estou aberto a novas oportunidades e colaborações. 
                  Entre em contato para discutirmos seu projeto.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
