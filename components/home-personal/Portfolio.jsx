'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Meu Portfólio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Trabalhos <span className="fw-200">Selecionados.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <span className="tag mr-20" style={{ backgroundColor: '#ff6b35', color: 'white', padding: '8px 16px', borderRadius: '20px', fontSize: '12px' }}>
                Em atualização
              </span>
              <a
                href="/portfolio"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver Todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        UX/UI Design
                      </a>
                    </div>
                    <h4>Sistema de Design - Sicoob</h4>
                  </div>
                  <div>
                    <p>
                      Criação de Design System institucional, integrando componentes reutilizáveis em Angular e React para melhorar consistência e eficiência no desenvolvimento.
                    </p>
                    <a href="/projetos/sistema-design-sicoob" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Adobe XD
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Mobile Design
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Google Analytics
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web
                      </a>
                    </div>
                    <h4>Mundo Caixa</h4>
                  </div>
                  <div>
                    <p>
                      Redesign completo do app e site do Mundo Caixa com nova identidade visual, funcionalidades de sonhos, talentos e missões para engajamento dos usuários.
                    </p>
                    <a href="/projetos/app-mobile-banking" className="underline mt-15">
                      <span className="text main-color sub-title">
                        Ver Detalhes <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
