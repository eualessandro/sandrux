import './globals.css';
import generateStylesheetObject from '@/common/generateStylesheetsObject';

export const metadata = {
  title: {
    default: 'Alessandro Rodrigues - Designer UX/UI Sênior | Desenvolvimento de Sites e Sistemas',
    template: '%s | Alessandro Rodrigues - Designer UX/UI'
  },
  description: 'Designer UX/UI Sênior especializado em desenvolvimento de sites, sistemas web, logos e identidade visual. Freelancer com 10+ anos de experiência em design digital e desenvolvimento front-end.',
  keywords: [
    'designer ux ui',
    'designer ux ui sênior',
    'desenvolvimento de sites',
    'desenvolvimento de sistemas',
    'design de logos',
    'identidade visual',
    'freelancer designer',
    'design digital',
    'interface design',
    'user experience',
    'user interface',
    'web design',
    'design responsivo',
    'figma designer',
    'adobe xd',
    'sketch designer',
    'prototipagem',
    'design system',
    'design de produtos',
    'consultoria design'
  ],
  authors: [{ name: 'Alessandro Rodrigues' }],
  creator: 'Alessandro Rodrigues',
  publisher: 'Alessandro Rodrigues',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app',
    siteName: 'Alessandro Rodrigues - Designer UX/UI',
    title: 'Alessandro Rodrigues - Designer UX/UI Sênior | Desenvolvimento de Sites e Sistemas',
    description: 'Designer UX/UI Sênior especializado em desenvolvimento de sites, sistemas web, logos e identidade visual. Freelancer com 10+ anos de experiência.',
    images: [
      {
        url: '/assets/imgs/logo-dark.png',
        width: 1200,
        height: 630,
        alt: 'Alessandro Rodrigues - Designer UX/UI Sênior',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alessandro Rodrigues - Designer UX/UI Sênior',
    description: 'Designer UX/UI Sênior especializado em desenvolvimento de sites, sistemas web, logos e identidade visual.',
    images: ['/assets/imgs/logo-dark.png'],
    creator: '@alessandrorodrigues',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Adicionar código real do Google Search Console
  },
  icons: {
    icon: '/assets/imgs/favicon.ico',
    shortcut: '/assets/imgs/favicon.ico',
    apple: '/assets/imgs/favicon.ico',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JVHJNFWW94"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JVHJNFWW94');
            `
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Alessandro Rodrigues",
              "jobTitle": "Designer UX/UI Sênior",
              "description": "Designer UX/UI Sênior especializado em desenvolvimento de sites, sistemas web, logos e identidade visual",
              "url": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app",
              "image": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app/assets/imgs/logo-dark.png",
              "sameAs": [
                "https://linkedin.com/in/alessandro-rodrigues",
                "https://behance.net/alessandrorodrigues",
                "https://dribbble.com/alessandrorodrigues"
              ],
              "knowsAbout": [
                "UX Design",
                "UI Design", 
                "Web Development",
                "System Design",
                "Logo Design",
                "Brand Identity",
                "Figma",
                "Adobe XD",
                "Sketch",
                "React",
                "Next.js",
                "JavaScript",
                "CSS",
                "HTML"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelancer"
              },
              "serviceType": [
                "UX/UI Design",
                "Web Development", 
                "System Development",
                "Logo Design",
                "Brand Identity",
                "Consulting"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Alessandro Rodrigues - Designer UX/UI",
              "url": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app",
              "description": "Portfólio de Alessandro Rodrigues - Designer UX/UI Sênior especializado em desenvolvimento de sites, sistemas web, logos e identidade visual",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
