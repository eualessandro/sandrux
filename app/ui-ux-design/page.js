import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Clients from '@/components/common/Clients';
import Services from '@/components/home-digital-agency/Services';
import Intro2 from '@/components/home-digital-agency/Intro2';
import Testimonials from '@/components/home-digital-agency/Testimonials';
import Blog from '@/components/home-digital-agency/Blog';
import Numbers from '@/components/page-services/Numbers';

export const metadata = {
  title: 'UI/UX Design | Contrate Designer UX/UI Sênior para Seu Projeto',
  description: 'Contrate um designer UX/UI sênior para criar interfaces intuitivas e experiências digitais excepcionais. Especializado em Figma, Adobe XD, prototipagem e design system. Freelancer com 10+ anos de experiência.',
  keywords: [
    'ui ux design',
    'designer ux ui',
    'contratar designer ux ui',
    'interface design',
    'user experience',
    'user interface',
    'figma designer',
    'adobe xd designer',
    'sketch designer',
    'prototipagem',
    'design system',
    'design de produtos',
    'design responsivo',
    'design digital',
    'freelancer designer',
    'designer sênior',
    'consultoria design',
    'web design',
    'mobile design',
    'app design'
  ],
  openGraph: {
    title: 'UI/UX Design | Contrate Designer UX/UI Sênior para Seu Projeto',
    description: 'Contrate um designer UX/UI sênior para criar interfaces intuitivas e experiências digitais excepcionais. Especializado em Figma, Adobe XD e prototipagem.',
    url: 'https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app/ui-ux-design',
    siteName: 'Alessandro Rodrigues - Designer UX/UI',
    images: [
      {
        url: '/assets/imgs/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'UI/UX Design - Alessandro Rodrigues',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UI/UX Design | Contrate Designer UX/UI Sênior para Seu Projeto',
    description: 'Contrate um designer UX/UI sênior para criar interfaces intuitivas e experiências digitais excepcionais.',
    images: ['/assets/imgs/logo-dark.png'],
  },
  alternates: {
    canonical: 'https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app/ui-ux-design',
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

export default function UxUxDesign() {
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
            <div
              className="header page-header bg-img section-padding valign"
              data-background="/assets/imgs/background/bg4.jpg"
              data-overlay-dark="8"
            >
              <div className="container pt-80">
                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <h1 className="text-u ls1 fz-80">
                        UI / UX <span className="fw-200">Design</span>
                      </h1>
                      <p className="text-center mt-4 fz-18">
                        Ajudo meus clientes a terem sucesso criando identidades, experiências digitais e materiais que se comunicam claramente
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Services />
            <Intro2 />
            <Numbers />
            <Testimonials />
            <Clients />
            <Blog />
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

      <Script src="/assets/js/scripts.js"></Script>
    </body>
  );
} 