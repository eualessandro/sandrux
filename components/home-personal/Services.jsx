import React from 'react';

function Services() {
  return (
    <section className="services-clas">
      <div className="container section-padding bord-bottom-grd pt-0">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Minhas Especialidades</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Habilidades <span className="fw-200">Técnicas.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more flex items-center gap-2">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30 mr-4"
              >
                <span>Ver Todas</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <h5>Ferramentas de Design</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Figma</span>
                  <span className="tag">Adobe XD</span>
                  <span className="tag">Sketch</span>
                </div>
                <p>
                  Prototipação de alta fidelidade, design systems modulares e interfaces responsivas com foco em usabilidade e acessibilidade.
                </p>
              </div>
              <a href="/ferramentas" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg md-mb30">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <h5>Front-end Development</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">React</span>
                  <span className="tag">Angular</span>
                  <span className="tag">JavaScript</span>
                </div>
                <p>
                  Desenvolvimento front-end com HTML5, CSS3, JavaScript, React, Angular e Bootstrap, sempre com foco em performance e experiência do usuário.
                </p>
              </div>
              <a href="/ferramentas" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item sub-bg">
              <div className="icon-img-60 opacity-5 mb-40">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <h5>Analytics & Testes</h5>
              <div className="text mt-40">
                <div className="mb-10">
                  <span className="tag">Google Analytics</span>
                  <span className="tag">Testes A/B</span>
                  <span className="tag">Hotjar</span>
                </div>
                <p>
                  Análise de dados comportamentais, testes de usabilidade, pesquisas qualitativas e otimização de conversões baseada em métricas.
                </p>
              </div>
              <a href="/ferramentas" className="mt-40">
                <span className="ti-arrow-top-right"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
