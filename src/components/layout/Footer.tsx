import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/UchoaBreno', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/breno-uch%C3%B4a-5ba8a8214/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:uchoa.breno2016@gmail.com', label: 'Email' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link to="/" className="text-lg font-bold">
              <span className="gradient-text">Breno Uchôa</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Desenvolvendo soluções criativas com tecnologia.
            </p>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sobre
            </Link>
            <Link
              to="/projetos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </Link>
            <Link
              to="/contato"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary hover:bg-primary/10 hover:text-primary transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Breno Uchôa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
