# 🚀 Portfólio - Breno Uchôa

Portfólio pessoal moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando projetos, habilidades e experiência profissional.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite)

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Páginas](#-páginas)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Projetos em Destaque](#-projetos-em-destaque)

## 🎯 Visão Geral

Este portfólio foi desenvolvido para apresentar minha trajetória profissional como Desenvolvedor Web Full Stack, destacando projetos, habilidades técnicas, formação acadêmica e certificações. O design é moderno, com suporte a tema claro/escuro e animações suaves.

## ✨ Funcionalidades

### 🎨 Design & UX
- **Tema Claro/Escuro** - Alternância automática ou manual de tema
- **Design Responsivo** - Adaptável a todos os tamanhos de tela
- **Animações Suaves** - Transições e efeitos visuais com Framer Motion
- **UI Moderna** - Componentes estilizados com Shadcn/UI e Tailwind CSS

### 🔧 Funcionalidades Técnicas
- **Navegação SPA** - Roteamento com React Router
- **Filtro de Projetos** - Filtragem por tecnologias utilizadas
- **Visualização de Certificados** - PDFs de certificações disponíveis
- **Download de Currículo** - CV disponível para download em PDF
- **Formulário de Contato** - Formulário funcional com validação
- **Links Sociais** - Integração com GitHub, LinkedIn e Email

### 📱 SEO & Performance
- **Meta Tags Otimizadas** - Open Graph e Twitter Cards
- **Carregamento Otimizado** - Lazy loading de imagens
- **Acessibilidade** - Componentes acessíveis via Radix UI

## 📄 Páginas

### 🏠 Home (`/`)
- Hero section com foto de perfil e apresentação
- Áreas de atuação (Desenvolvimento Web, IA na Educação, Metodologias Ágeis, Sistemas Administrativos)
- Projetos em destaque
- Call-to-action para contato

### 👤 Sobre (`/sobre`)
- Biografia profissional com foto
- Habilidades técnicas (React, TypeScript, Node.js, Python, Django, etc.)
- Soft skills e interesses
- Timeline de experiência profissional
- Certificações e cursos complementares com links para certificados

### 💼 Projetos (`/projetos`)
- Grade de projetos com cards interativos
- Sistema de filtro por tecnologia
- Links para demo, código-fonte e detalhes

### 📝 Detalhes do Projeto (`/projetos/:slug`)
- Descrição completa do projeto
- Objetivos e funcionalidades
- Tecnologias utilizadas
- Capturas de tela
- Links para demo e repositório
- Seções "Como foi desenvolvido" e "O que aprendi"

### 📧 Contato (`/contato`)
- Formulário de contato (Nome, Email, Mensagem)
- Links para redes sociais
- Botão para download do currículo

## 🛠 Tecnologias Utilizadas

### Frontend
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 18.3.1 | Biblioteca para construção de interfaces |
| TypeScript | 5.0+ | Superset tipado de JavaScript |
| Vite | 5.0+ | Build tool e dev server |
| Tailwind CSS | 3.4+ | Framework CSS utilitário |
| React Router | 6.30+ | Roteamento SPA |

### UI & Componentes
| Tecnologia | Descrição |
|------------|-----------|
| Shadcn/UI | Componentes acessíveis e customizáveis |
| Radix UI | Primitivos de UI acessíveis |
| Lucide React | Biblioteca de ícones |
| Framer Motion | Animações e transições |

### Gerenciamento de Estado & Data
| Tecnologia | Descrição |
|------------|-----------|
| TanStack Query | Gerenciamento de estado assíncrono |
| React Hook Form | Gerenciamento de formulários |
| Zod | Validação de schemas |

### Estilização
| Tecnologia | Descrição |
|------------|-----------|
| Tailwind CSS | Estilização utilitária |
| tailwindcss-animate | Animações CSS |
| class-variance-authority | Variantes de componentes |
| @fontsource/outfit | Tipografia customizada |

## 📁 Estrutura do Projeto

```
src/
├── assets/                 # Imagens e recursos estáticos
│   ├── profile-photo.png   # Foto de perfil
│   └── projects/           # Imagens dos projetos
├── components/
│   ├── layout/             # Componentes de layout
│   │   ├── Header.tsx      # Navegação principal
│   │   ├── Footer.tsx      # Rodapé
│   │   └── Layout.tsx      # Wrapper de página
│   ├── ui/                 # Componentes Shadcn/UI
│   ├── NavLink.tsx         # Link de navegação
│   ├── ProjectCard.tsx     # Card de projeto
│   ├── SectionTitle.tsx    # Título de seção
│   ├── SkillBadge.tsx      # Badge de habilidade
│   └── TimelineItem.tsx    # Item de timeline
├── data/
│   └── projects.ts         # Dados dos projetos
├── hooks/                  # Hooks customizados
├── lib/
│   └── utils.ts            # Utilitários
├── pages/
│   ├── Index.tsx           # Página inicial
│   ├── Sobre.tsx           # Página sobre
│   ├── Projetos.tsx        # Lista de projetos
│   ├── ProjetoDetalhe.tsx  # Detalhes do projeto
│   ├── Contato.tsx         # Página de contato
│   └── NotFound.tsx        # Página 404
├── App.tsx                 # Componente raiz
├── main.tsx                # Entry point
└── index.css               # Estilos globais e variáveis CSS

public/
├── certificados/           # PDFs de certificações
└── curriculo-breno-uchoa.pdf # Currículo para download
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou bun

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>

# Navegue até o diretório
cd <NOME_DO_PROJETO>

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Linting do código
```

## 🌟 Projetos em Destaque

### FlashMind
Gerador de Flashcards com IA para auxiliar nos estudos.
- **Demo:** [flashcardstudy.lovable.app](https://flashcardstudy.lovable.app)
- **Tecnologias:** React, TypeScript, OpenAI, Tailwind CSS

### FlowTask
Sistema Kanban com metodologias ágeis (Pomodoro e Scrum).
- **Demo:** [flowstackmmetodologiasageis.lovable.app](https://flowstackmmetodologiasageis.lovable.app)
- **Tecnologias:** React, TypeScript, Tailwind CSS

### StudyPlan
Gerador de Planos de Estudo personalizados com IA.
- **Demo:** [studyplans.lovable.app](https://studyplans.lovable.app)
- **Tecnologias:** React, TypeScript, OpenAI, Tailwind CSS

### EducaFácil
Sistema de gestão escolar completo.
- **Demo:** [educa-fullstack.lovable.app](https://educa-fullstack.lovable.app)
- **Tecnologias:** React, Node.js, PostgreSQL

### Plataforma AVA
Ambiente Virtual de Aprendizagem.
- **Demo:** [plataforma-ava.onrender.com](https://plataforma-ava.onrender.com/login)
- **Tecnologias:** Python, Django, PostgreSQL

## 📞 Contato

- **LinkedIn:** [Breno Uchôa](https://www.linkedin.com/in/breno-uch%C3%B4a-5ba8a8214/)
- **GitHub:** [UchoaBreno](https://github.com/UchoaBreno)
- **Email:** uchoa.breno2016@gmail.com

---

Desenvolvido com ❤️ por Breno Uchôa
