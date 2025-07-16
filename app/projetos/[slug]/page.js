import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/project-details/Header';
import Challenge from '@/components/project-details/Challenge';
import Solution from '@/components/project-details/Solution';
import Works from '@/components/project-details/Works';
import Works2 from '@/components/project-details/Wroks2';
import Next from '@/components/project-details/Next';

// Função para gerar parâmetros estáticos
export async function generateStaticParams() {
  const slugs = [
    'sistema-design-sicoob',
    'ecommerce-responsivo',
    'app-mobile-banking',
    'dashboard-react',
    'ux-research',
    'analytics-conversao',
    'testes-ab',
    'angular-empresarial',
    'javascript-interativo'
  ];

  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Dados dos projetos
const projects = {
  'sistema-design-sicoob': {
    title: 'Sistema de Design - Sicoob',
    description: 'Desenvolvimento de um sistema de design completo para o Sicoob, incluindo componentes modulares, documentação e implementação.',
    category: 'Design System',
    client: 'Sicoob',
    duration: '6 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar um sistema de design unificado para uma cooperativa financeira com múltiplas marcas e produtos.',
    solution: 'Desenvolvimento de componentes modulares, documentação completa e implementação em Figma com design tokens.',
    images: [
      '/assets/imgs/works/1/1.jpg',
      '/assets/imgs/works/1/2.jpg',
      '/assets/imgs/works/1/3.jpg'
    ],
    nextProject: 'ecommerce-responsivo'
  },
  'ecommerce-responsivo': {
    title: 'E-commerce Responsivo',
    description: 'Design e desenvolvimento de plataforma de e-commerce com foco em conversão e experiência mobile.',
    category: 'UX/UI Design',
    client: 'Empresa de Varejo',
    duration: '4 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar uma experiência de compra fluida e responsiva que aumente a conversão em dispositivos móveis.',
    solution: 'Design centrado no usuário com prototipação avançada, testes de usabilidade e implementação responsiva.',
    images: [
      '/assets/imgs/works/2/1.jpg',
      '/assets/imgs/works/2/2.jpg',
      '/assets/imgs/works/2/3.jpg'
    ],
    nextProject: 'app-mobile-banking'
  },
  'app-mobile-banking': {
    title: 'App Mobile Banking',
    description: 'Prototipação e design de aplicativo mobile para banco digital com foco em segurança e usabilidade.',
    category: 'Prototipação',
    client: 'Banco Digital',
    duration: '5 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar uma experiência bancária mobile segura, intuitiva e acessível para diferentes perfis de usuários.',
    solution: 'Design system específico para mobile, prototipação de alta fidelidade e testes de usabilidade.',
    images: [
      '/assets/imgs/works/3/1.jpg',
      '/assets/imgs/works/3/2.jpg',
      '/assets/imgs/works/3/3.jpg'
    ],
    nextProject: 'dashboard-react'
  },
  'dashboard-react': {
    title: 'Dashboard React',
    description: 'Desenvolvimento de dashboard administrativo com React, focado em performance e experiência do usuário.',
    category: 'Front-end',
    client: 'Startup Tech',
    duration: '3 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar um dashboard responsivo e performático que permita visualização e gestão de dados complexos.',
    solution: 'Desenvolvimento com React, componentes reutilizáveis, otimização de performance e design responsivo.',
    images: [
      '/assets/imgs/works/2/4.jpg',
      '/assets/imgs/works/2/5.jpg',
      '/assets/imgs/works/2/6.jpg'
    ],
    nextProject: 'sistema-design-sicoob'
  },
  'ux-research': {
    title: 'Pesquisa de Usuários',
    description: 'Estudo qualitativo e quantitativo para entender necessidades e comportamentos dos usuários.',
    category: 'UX Research',
    client: 'Empresa de Produtos',
    duration: '2 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Conduzir pesquisa abrangente para identificar oportunidades de melhoria em produtos digitais.',
    solution: 'Entrevistas qualitativas, surveys quantitativos, análise de dados e recomendações baseadas em evidências.',
    images: [
      '/assets/imgs/works/2/5.jpg',
      '/assets/imgs/works/2/7.jpg',
      '/assets/imgs/works/2/8.jpg'
    ],
    nextProject: 'analytics-conversao'
  },
  'analytics-conversao': {
    title: 'Otimização de Conversão',
    description: 'Análise de dados e implementação de melhorias para aumentar conversões em plataformas digitais.',
    category: 'Analytics',
    client: 'E-commerce',
    duration: '4 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Identificar e corrigir pontos de fricção que estavam impactando negativamente as conversões.',
    solution: 'Implementação de Google Analytics, testes A/B, análise de funil e otimização contínua.',
    images: [
      '/assets/imgs/works/2/6.jpg',
      '/assets/imgs/works/2/8.jpg',
      '/assets/imgs/works/2/9.jpg'
    ],
    nextProject: 'testes-ab'
  },
  'testes-ab': {
    title: 'Experiência do Usuário',
    description: 'Implementação de testes A/B para otimizar experiência e aumentar engajamento.',
    category: 'Testes A/B',
    client: 'SaaS Platform',
    duration: '3 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Otimizar a experiência do usuário através de testes controlados e análise de dados.',
    solution: 'Design de variantes, implementação de testes A/B, análise estatística e implementação de melhorias.',
    images: [
      '/assets/imgs/works/2/7.jpg',
      '/assets/imgs/works/2/9.jpg',
      '/assets/imgs/works/2/1.jpg'
    ],
    nextProject: 'angular-empresarial'
  },
  'angular-empresarial': {
    title: 'Aplicação Empresarial',
    description: 'Desenvolvimento de aplicação robusta com Angular para ambiente corporativo.',
    category: 'Angular',
    client: 'Corporação',
    duration: '6 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar aplicação escalável e segura para gestão de processos empresariais complexos.',
    solution: 'Arquitetura modular com Angular, TypeScript, design system corporativo e integração com APIs.',
    images: [
      '/assets/imgs/works/2/8.jpg',
      '/assets/imgs/works/2/1.jpg',
      '/assets/imgs/works/2/2.jpg'
    ],
    nextProject: 'javascript-interativo'
  },
  'javascript-interativo': {
    title: 'Interface Interativa',
    description: 'Desenvolvimento de interfaces dinâmicas e responsivas com JavaScript moderno.',
    category: 'JavaScript',
    client: 'Agencia Digital',
    duration: '2 meses',
    team: 'UX/UI Designer Sênior',
    challenge: 'Criar interfaces interativas que proporcionem experiência fluida e envolvente.',
    solution: 'JavaScript ES6+, manipulação de DOM, animações CSS e otimização de performance.',
    images: [
      '/assets/imgs/works/2/9.jpg',
      '/assets/imgs/works/2/2.jpg',
      '/assets/imgs/works/2/3.jpg'
    ],
    nextProject: 'sistema-design-sicoob'
  }
};

export async function generateMetadata({ params }) {
  const project = projects[params.slug];
  
  if (!project) {
    return {
      title: 'Projeto Não Encontrado - Alessandro Rodrigues',
      description: 'O projeto solicitado não foi encontrado.'
    };
  }

  return {
    title: `${project.title} - Alessandro Rodrigues`,
    description: project.description,
    icons: {
      icon: '/assets/imgs/favicon.ico',
      shortcut: '/assets/imgs/favicon.ico',
      other: generateStylesheetObject([
        '/assets/css/plugins.css',
        '/assets/css/style.css',
        'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
      ]),
    },
  };
}

export default function ProjectDetails({ params }) {
  const project = projects[params.slug];
  
  if (!project) {
    return (
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main className="main-bg o-hidden">
              <div className="container section-padding">
                <div className="row justify-content-center">
                  <div className="col-lg-8 text-center">
                    <h1>Projeto Não Encontrado</h1>
                    <p>O projeto solicitado não foi encontrado.</p>
                    <a href="/portfolio" className="butn butn-sm butn-bg main-colorbg radius-5">
                      <span className="text">Voltar ao Portfólio</span>
                    </a>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
        <Script src="/assets/js/scripts.js"></Script>
      </body>
    );
  }

  return (
    <body>
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header project={project} />
            <Challenge project={project} />
            <Solution project={project} />
            <Works project={project} />
            <Works2 project={project} />
            <Next project={project} />
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
} 