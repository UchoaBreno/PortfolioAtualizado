import flashmindImg from '@/assets/projects/flashmind.png';
import educafacilImg from '@/assets/projects/educafacil.png';
import plataformaAvaImg from '@/assets/projects/plataforma-ava.png';
import flowtaskImg from '@/assets/projects/flowtask.png';
import studyplanImg from '@/assets/projects/studyplan.png';
import techstoreImg from '@/assets/projects/techstore.png';

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  objective: string;
  technologies: string[];
  features: string[];
  learnings: string[];
  developmentProcess: string;
  image: string;
  screenshots: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "flashmind",
    title: "FlashMind - Gerador de Flashcards com IA",
    shortDescription: "Aplicação inteligente que gera flashcards automaticamente usando IA generativa para otimizar seus estudos.",
    fullDescription: "FlashMind é uma plataforma educacional inovadora que utiliza inteligência artificial para criar flashcards personalizados. A aplicação transforma qualquer conteúdo em material de estudo otimizado, facilitando a memorização através da técnica de repetição espaçada.",
    objective: "Democratizar o acesso a ferramentas de estudo eficientes, automatizando a criação de material de revisão com IA.",
    technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "TailwindCSS"],
    features: [
      "Geração automática de flashcards via IA",
      "Sistema de repetição espaçada",
      "Interface intuitiva e responsiva",
      "Organização por decks e categorias",
      "Estatísticas de progresso de estudo"
    ],
    learnings: [
      "Integração com APIs de IA generativa",
      "Processamento de linguagem natural",
      "Algoritmos de repetição espaçada",
      "Otimização de prompts para IA"
    ],
    developmentProcess: "Iniciei com pesquisa sobre técnicas de memorização e algoritmos SRS. A integração com IA foi iterativa, refinando prompts para melhor qualidade dos flashcards gerados.",
    image: flashmindImg,
    screenshots: [],
    demoUrl: "https://flashmind-look.vercel.app/",
    githubUrl: "https://github.com/UchoaBreno/FlashMind",
    featured: true
  },
  {
    id: "2",
    slug: "educafacil-estagio",
    title: "EducaFácil - Sistema de Gestão Escolar",
    shortDescription: "Sistema completo de gestão escolar desenvolvido durante estágio, com módulos para alunos, professores e administração.",
    fullDescription: "EducaFácil é um sistema robusto de gestão escolar desenvolvido durante meu estágio na faculdade. A plataforma oferece uma solução completa para instituições de ensino, facilitando a comunicação entre alunos, professores e coordenação.",
    objective: "Criar uma ferramenta que simplifique a gestão escolar, unificando processos administrativos e pedagógicos em uma única plataforma.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "TailwindCSS"],
    features: [
      "Gestão de matrículas e turmas",
      "Portal do aluno e do professor",
      "Sistema de notas e frequência",
      "Comunicados e agenda escolar",
      "Relatórios gerenciais"
    ],
    learnings: [
      "Desenvolvimento de sistemas corporativos",
      "Trabalho em equipe em ambiente profissional",
      "Gerenciamento de banco de dados complexo",
      "UX para diferentes perfis de usuário"
    ],
    developmentProcess: "Projeto desenvolvido durante estágio, seguindo metodologias ágeis com sprints semanais e reuniões diárias. Trabalhei com uma equipe multidisciplinar para entregar um sistema completo.",
    image: educafacilImg,
    screenshots: [],
    demoUrl: "https://educafacil-br.vercel.app/",
    githubUrl: "https://github.com/UchoaBreno/educafacil-estagio",
    featured: true
  },
  {
    id: "3",
    slug: "plataforma-ava",
    title: "Plataforma AVA - Ambiente Virtual de Aprendizagem",
    shortDescription: "Ambiente virtual de aprendizagem completo com suporte a cursos, videoaulas e avaliações online.",
    fullDescription: "Uma plataforma EAD moderna e funcional que permite a criação e gestão de cursos online. O sistema oferece recursos para upload de videoaulas, materiais complementares, fóruns de discussão e avaliações automatizadas.",
    objective: "Desenvolver uma plataforma de educação a distância acessível e completa para instituições de ensino.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TailwindCSS"],
    features: [
      "Criação e gestão de cursos",
      "Player de videoaulas integrado",
      "Sistema de avaliações e quizzes",
      "Fóruns de discussão por módulo",
      "Certificados de conclusão automáticos"
    ],
    learnings: [
      "Arquitetura de sistemas de streaming",
      "Gerenciamento de conteúdo multimídia",
      "Design de experiências educacionais",
      "Implementação de sistemas de gamificação"
    ],
    developmentProcess: "Desenvolvido com foco em acessibilidade e performance. Utilizei princípios de design instrucional para criar uma experiência de aprendizado eficiente.",
    image: plataformaAvaImg,
    screenshots: [],
    demoUrl: "https://plataforma-ava.onrender.com/login",
    githubUrl: "https://github.com/UchoaBreno/plataforma-ava",
    featured: true
  },
  {
    id: "4",
    slug: "flowtask-metodologias-ageis",
    title: "FlowTask - Kanban com Metodologias Ágeis",
    shortDescription: "Sistema Kanban completo com integração de Pomodoro, Scrum e métricas de produtividade para equipes.",
    fullDescription: "FlowTask é uma ferramenta de gestão de tarefas que combina o visual do Kanban com técnicas comprovadas de produtividade. Ideal para desenvolvedores e equipes que seguem metodologias ágeis.",
    objective: "Criar uma ferramenta que unifique as melhores práticas de produtividade e metodologias ágeis em uma única interface intuitiva.",
    technologies: ["React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL"],
    features: [
      "Quadro Kanban drag-and-drop",
      "Timer Pomodoro integrado",
      "Sprints e backlog (Scrum)",
      "Métricas de velocidade da equipe",
      "Relatórios de produtividade"
    ],
    learnings: [
      "Implementação de drag-and-drop",
      "Gerenciamento de estado complexo",
      "Design de sistemas de produtividade",
      "Métricas e analytics de uso"
    ],
    developmentProcess: "O projeto foi desenvolvido seguindo princípios de Clean Architecture, com separação clara entre camadas de apresentação, domínio e infraestrutura.",
    image: flowtaskImg,
    screenshots: [],
    demoUrl: "https://flowtask-metodologias-ageis.vercel.app/",
    githubUrl: "https://github.com/UchoaBreno/Flowtask-metodologiasAgeis",
    featured: true
  },
  {
    id: "5",
    slug: "studyplan",
    title: "StudyPlan - Gerador de Plano de Estudos com IA",
    shortDescription: "Aplicação que utiliza IA para criar planos de estudo personalizados baseados nos objetivos do usuário.",
    fullDescription: "StudyPlan é um assistente de estudos inteligente que cria cronogramas personalizados. A IA analisa seus objetivos, tempo disponível e estilo de aprendizado para gerar um plano otimizado.",
    objective: "Ajudar estudantes a organizarem seus estudos de forma eficiente e personalizada, maximizando resultados.",
    technologies: ["React", "TypeScript", "OpenAI API", "Node.js", "TailwindCSS"],
    features: [
      "Geração de planos via IA",
      "Cronograma personalizado",
      "Lembretes e notificações",
      "Acompanhamento de progresso",
      "Ajuste dinâmico de metas"
    ],
    learnings: [
      "Design de sistemas adaptativos",
      "UX para aplicações educacionais",
      "Personalização baseada em dados",
      "Integração com APIs de IA"
    ],
    developmentProcess: "Desenvolvi usando metodologia ágil com sprints semanais. Foquei em criar uma experiência fluida de onboarding que coleta informações do usuário de forma não intrusiva.",
    image: studyplanImg,
    screenshots: [],
    demoUrl: "https://planosestudo.vercel.app/",
    githubUrl: "https://github.com/UchoaBreno/StudyPlan",
    featured: true
  },
  {
    id: "6",
    slug: "techstore",
    title: "TechStore - E-commerce de Produtos Tecnológicos",
    shortDescription: "Loja virtual moderna e responsiva para produtos de tecnologia com design premium e experiência de usuário otimizada.",
    fullDescription: "TechStore é uma plataforma de e-commerce focada em produtos tecnológicos premium. O projeto apresenta um design moderno com animações suaves, catálogo de produtos, sistema de carrinho e checkout otimizado para conversão.",
    objective: "Criar uma experiência de compra online premium, com foco em UI/UX de alta qualidade e performance.",
    technologies: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
    features: [
      "Design responsivo e moderno",
      "Catálogo de produtos com filtros",
      "Carrinho de compras dinâmico",
      "Animações suaves com Framer Motion",
      "Interface premium com foco em conversão"
    ],
    learnings: [
      "Design de interfaces de e-commerce",
      "Animações avançadas com Framer Motion",
      "Otimização de UX para conversão",
      "Componentização avançada em React"
    ],
    developmentProcess: "Desenvolvido com foco em design premium e experiência do usuário. Utilizei princípios de UI/UX modernos para criar uma interface que transmite sofisticação e confiança.",
    image: techstoreImg,
    screenshots: [],
    demoUrl: "https://tech-store-zeta-two.vercel.app/",
    githubUrl: "https://github.com/UchoaBreno/TechStore",
    featured: true
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(p => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(p => p.featured);
};
