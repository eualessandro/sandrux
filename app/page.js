import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';
import Clients from '@/components/common/Clients';
import StructuredData from '@/components/common/StructuredData';

import Blog from '@/components/home-digital-agency/Blog';

import Testimonials from '@/components/home-modern-studio/Testimonials';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Experience from '@/components/home-personal/Experience';
import Education from '@/components/home-personal/Education';
import Services from '@/components/home-personal/Services';
import Skills from '@/components/home-personal/Skills';
import Portfolio from '@/components/home-personal/Portfolio';

export const metadata = {
  title: 'Alessandro Rodrigues - Designer UX/UI Sênior | Freelancer Especializado em Sites e Sistemas',
  description: 'Designer UX/UI Sênior freelancer com 10+ anos de experiência. Especializado em desenvolvimento de sites, sistemas web, logos e identidade visual. Contrate um designer experiente para seu projeto.',
  keywords: [
    'designer ux ui freelancer',
    'contratar designer ux ui',
    'desenvolvimento de sites',
    'desenvolvimento de sistemas',
    'design de logos',
    'identidade visual',
    'designer sênior',
    'freelancer design',
    'web design',
    'interface design',
    'user experience',
    'user interface',
    'figma designer',
    'adobe xd',
    'sketch designer',
    'prototipagem',
    'design system',
    'design de produtos',
    'consultoria design',
    'design responsivo',
    'design digital',
    'front-end development',
    'react developer',
    'next.js developer'
  ],
  openGraph: {
    title: 'Alessandro Rodrigues - Designer UX/UI Sênior | Freelancer',
    description: 'Designer UX/UI Sênior freelancer especializado em desenvolvimento de sites, sistemas web, logos e identidade visual. 10+ anos de experiência.',
    url: 'https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app',
    siteName: 'Alessandro Rodrigues - Designer UX/UI',
    images: [
      {
        url: '/assets/imgs/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Alessandro Rodrigues - Designer UX/UI Sênior Freelancer',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alessandro Rodrigues - Designer UX/UI Sênior | Freelancer',
    description: 'Designer UX/UI Sênior freelancer especializado em desenvolvimento de sites, sistemas web, logos e identidade visual.',
    images: ['/assets/imgs/logo-dark.png'],
  },
  alternates: {
    canonical: 'https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app',
  },
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

export default function Home() {
  return (
    <body className="home-personal">
      <StructuredData type="person" />
      <StructuredData type="website" />
      <StructuredData type="organization" />
      <LoadingScreen />
      <Cursor />
      <ProgressScroll />
      <Lines />
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            <Marq />
            <About />
            <Experience />
            <Education />
            <Services />
            <Portfolio />
            <Skills />
            <Testimonials />
            <Clients />
            <Blog />
            <Marq2 />
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
