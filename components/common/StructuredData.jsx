'use client';

export default function StructuredData({ type, data }) {
  const getStructuredData = () => {
    switch (type) {
      case 'person':
        return {
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
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          },
          "telephone": "+55-11-99999-9999",
          "email": "contato@alessandrorodrigues.com"
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name || "Design UX/UI",
          "description": data.description || "Serviços de design UX/UI especializados",
          "provider": {
            "@type": "Person",
            "name": "Alessandro Rodrigues"
          },
          "serviceType": data.serviceType || "UX/UI Design",
          "areaServed": "BR",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Design",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "UI/UX Design"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Desenvolvimento de Sites"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Design de Logos"
                }
              }
            ]
          }
        };

      case 'website':
        return {
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
        };

      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Alessandro Rodrigues - Designer UX/UI",
          "url": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app",
          "logo": "https://sandrux-s7xq10lf8-eualessandros-projects.vercel.app/assets/imgs/logo-dark.png",
          "description": "Designer UX/UI Sênior freelancer especializado em desenvolvimento de sites, sistemas web, logos e identidade visual",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contato@alessandrorodrigues.com"
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
} 