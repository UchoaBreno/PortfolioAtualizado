import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, GraduationCap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/ProjectCard';
import { SectionTitle } from '@/components/SectionTitle';
import { getFeaturedProjects } from '@/data/projects';
import profilePhoto from '@/assets/profile-photo.png';
const areas = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Criação de aplicações web modernas e responsivas com React, TypeScript e Node.js.',
  },
  {
    icon: GraduationCap,
    title: 'Educação Digital',
    description: 'Desenvolvimento de ferramentas educacionais que potencializam o aprendizado.',
  },
];

export default function Index() {
  const featuredProjects = getFeaturedProjects();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Desenvolvedor Frontend & Backend Web
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
              >
                Olá, eu sou{' '}
                <span className="gradient-text">Breno Uchôa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
              >
                Transformo ideias em experiências digitais incríveis. 
                Especializado em React, IA e ferramentas educacionais.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button asChild variant="hero" size="lg">
                  <Link to="/projetos">
                    Ver Projetos
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="lg">
                  <Link to="/contato">
                    Entrar em Contato
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                  <img 
                    src={profilePhoto} 
                    alt="Breno Uchôa - Desenvolvedor Web" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Áreas de Atuação"
            subtitle="Combinando tecnologia e criatividade para resolver problemas reais."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <SectionTitle
              title="Projetos em Destaque"
              subtitle="Conheça alguns dos meus trabalhos mais recentes."
              className="mb-0"
            />
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link to="/projetos">
                Ver todos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild variant="outline">
              <Link to="/projetos">
                Ver todos os projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-muted-foreground mb-8">
              Estou sempre aberto a novos projetos e colaborações interessantes.
            </p>
            <Button asChild variant="hero" size="lg">
              <Link to="/contato">
                Entrar em Contato
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
