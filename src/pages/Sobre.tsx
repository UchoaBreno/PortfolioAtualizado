import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/SectionTitle';
import { SkillBadge } from '@/components/SkillBadge';
import { TimelineItem } from '@/components/TimelineItem';
import { ExternalLink, Award, Clock, Calendar } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
const skills = [
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'Tailwind CSS', icon: '💨' },
  { name: 'Python', icon: '🐍' },
  { name: 'Django', icon: '🎯' },
  { name: 'OpenAI', icon: '🤖' },
  { name: 'Git', icon: '📦' },
];

const softSkills = [
  'Comunicação Efetiva',
  'Trabalho em Equipe',
  'Resolução de Problemas',
  'Pensamento Crítico',
  'Adaptabilidade',
  'Gestão de Tempo',
  'Proatividade',
  'Aprendizado Contínuo',
];

const timeline = [
  {
    year: '2025',
    title: 'Conclusão da Graduação',
    description: 'Formação em Engenharia de Software, consolidando conhecimentos em arquitetura de sistemas, metodologias ágeis e desenvolvimento web.',
  },
  {
    year: '2024',
    title: 'Projetos com Inteligência Artificial',
    description: 'Desenvolvimento de aplicações educacionais integrando OpenAI API, como FlashMind e StudyPlan, revolucionando a forma de aprender.',
  },
  {
    year: '2023',
    title: 'Estágio em Gestão Escolar',
    description: 'Desenvolvimento do sistema EducaFácil durante estágio, criando soluções completas para gestão escolar e plataformas EAD.',
  },
  {
    year: '2019',
    title: 'Início da Jornada',
    description: 'Começo da graduação em Engenharia de Software e descoberta da paixão por transformar ideias em código.',
  },
];

const interests = [
  'Inteligência Artificial',
  'Educação Digital',
  'Desenvolvimento Web',
  'Metodologias Ágeis',
  'Open Source',
  'UX/UI Design',
];

const certifications = [
  'JavaScript - Fundamentos e Avançado',
  'React - Desenvolvimento de SPAs',
  'HTML5 & CSS3 - Web Design Moderno',
  'Node.js - APIs RESTful',
];

const cursosComplementares = [
  {
    nome: 'Formação Front-end - HTML, CSS, JavaScript, React e +',
    plataforma: 'Udemy',
    instrutor: 'Matheus Battisti',
    duracao: '51.5 horas',
    data: 'Dezembro de 2025',
    certificado: '/certificados/formacao-frontend.pdf',
  },
  {
    nome: 'Algoritmos e Lógica de Programação - O Curso COMPLETO',
    plataforma: 'Udemy',
    instrutor: 'Nelio Alves',
    duracao: '30.5 horas',
    data: 'Janeiro de 2023',
    certificado: '/certificados/algoritmos-logica-programacao.pdf',
  },
  {
    nome: 'Programador .NET do Zero ao Profissional com C#',
    plataforma: 'Udemy',
    instrutor: 'Danilo Filitto',
    duracao: '33 horas',
    data: 'Fevereiro de 2024',
    certificado: '/certificados/programador-dotnet-csharp.pdf',
  },
  {
    nome: 'Crie sites ASP.NET (webforms) utilizando C# e JavaScript',
    plataforma: 'Udemy',
    instrutor: 'Danilo Filitto',
    duracao: '29 horas',
    data: 'Fevereiro de 2024',
    certificado: '/certificados/asp-net-webforms-crie-sites.pdf',
  },
  {
    nome: 'Projeto SUPER - Ano 3',
    plataforma: 'UFAM',
    instrutor: 'Universidade Federal do Amazonas',
    duracao: '440 horas',
    data: '2022',
    certificado: '/certificados/projeto-super.pdf',
  },
  {
    nome: 'Coletivo Coca-Cola',
    plataforma: 'Instituto Coca-Cola Brasil',
    instrutor: 'Coletivo Online',
    duracao: '11 horas',
    data: '2025',
    certificado: '/certificados/coletivo-coca-cola.pdf',
  },
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-border">
                <img 
                  src={profilePhoto} 
                  alt="Breno Uchôa - Desenvolvedor Web" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Sobre Mim
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Olá! Eu sou <span className="gradient-text">Breno Uchôa</span>
              </h1>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tenho 24 anos e sou apaixonado por tecnologia desde que escrevi minha primeira linha de código. 
                  Estudante de Engenharia de Software desde 2019, com previsão de formatura no final de 2025, 
                  encontrei na programação não apenas uma profissão, mas uma forma de transformar o mundo.
                </p>
                <p>
                  Minha trajetória é marcada pela dedicação em criar soluções que impactam positivamente a educação. 
                  Durante meu estágio, desenvolvi sistemas de gestão escolar que facilitam o dia a dia de 
                  milhares de estudantes e professores. Essa experiência despertou em mim o desejo de 
                  unir tecnologia e educação para democratizar o conhecimento.
                </p>
                <p>
                  Acredito que o código tem o poder de resolver problemas reais. Por isso, me dedico a 
                  criar aplicações que não apenas funcionam, mas que encantam e facilitam a vida das pessoas.
                  Cada projeto é uma oportunidade de aprender algo novo e deixar minha marca no mundo digital.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Tecnologias que Domino"
            subtitle="Ferramentas e tecnologias que uso para dar vida às minhas ideias."
            centered
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBadge key={skill.name} {...skill} index={index} />
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 bg-card border border-border rounded-xl max-w-2xl mx-auto"
          >
            <h3 className="font-semibold mb-4 text-center">Certificações</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert, index) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cursos Complementares */}
          <div className="mt-16">
            <SectionTitle
              title="Cursos Complementares"
              subtitle="Formações e certificações que complementam minha jornada profissional."
              centered
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
              {cursosComplementares.map((curso, index) => (
                <motion.div
                  key={curso.nome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm leading-tight mb-2 group-hover:text-primary transition-colors">
                        {curso.nome}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-3">
                        {curso.plataforma} • {curso.instrutor}
                      </p>
                      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {curso.duracao}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {curso.data}
                        </span>
                      </div>
                      <a
                        href={curso.certificado}
                        download
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Baixar Certificado
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Minha Jornada"
                subtitle="Os marcos mais importantes da minha carreira."
              />

              <div className="mt-8">
                {timeline.map((item, index) => (
                  <TimelineItem key={item.year} {...item} index={index} />
                ))}
              </div>
            </div>

            <div>
              <SectionTitle
                title="Soft Skills"
                subtitle="Habilidades interpessoais que me destacam no mercado."
              />

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12">
                <SectionTitle
                  title="Áreas de Interesse"
                  subtitle="Temas que me fascinam e nos quais busco me aprofundar."
                />
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 bg-card border border-border rounded-lg hover:border-primary/30 transition-colors"
                  >
                    <span className="font-medium">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
