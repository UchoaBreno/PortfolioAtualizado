import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getProjectBySlug } from '@/data/projects';

export default function ProjetoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Button asChild>
            <Link to="/projetos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos projetos
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/projetos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos projetos
            </Link>
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {project.fullDescription}
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="hero">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Ver Demo
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Ver Código
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-border overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Objective */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Objetivo do Projeto</h2>
                <p className="text-muted-foreground">{project.objective}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Funcionalidades</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 p-3 bg-card rounded-lg border border-border"
                    >
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Development Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">Como foi Desenvolvido</h2>
                <p className="text-muted-foreground">{project.developmentProcess}</p>
              </motion.div>

              {/* Learnings */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold mb-4">O que Aprendi</h2>
                <ul className="space-y-2">
                  {project.learnings.map((learning) => (
                    <li
                      key={learning}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="text-primary">→</span>
                      {learning}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="sticky top-24 space-y-6"
              >
                {/* Tech Stack */}
                <div className="p-6 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold mb-4">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="p-6 bg-card rounded-xl border border-border space-y-3">
                  <h3 className="font-semibold mb-4">Links</h3>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    Repositório GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
