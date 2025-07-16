import React from 'react';

function Feat() {
  return (
    <section className="feat mb-80">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Como <span className="fw-200">Trabalho</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a href="/servicos" className="butn butn-sm butn-bord radius-30">
                <span>Ver Todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Minha abordagem</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/3.png" alt="" />
              </div>
              <span className="mb-30 p-color">01 .</span>
              <h6 className="mb-20">Figma</h6>
              <p>
                Design colaborativo em tempo real, prototipação avançada e design systems compartilhados.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/4.png" alt="" />
              </div>
              <span className="mb-30 p-color">02 .</span>
              <h6 className="mb-20">Adobe XD</h6>
              <p>
                Prototipação de alta fidelidade, animações interativas e integração com Creative Cloud.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/5.png" alt="" />
              </div>
              <span className="mb-30 p-color">03 .</span>
              <h6 className="mb-20">Sketch</h6>
              <p>
                Design de interface nativo para Mac, plugins avançados e workflow otimizado.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/6.png" alt="" />
              </div>
              <span className="mb-30 p-color">04 .</span>
              <h6 className="mb-20">Design Systems</h6>
              <p>
                Componentes modulares, documentação completa e consistência visual em todos os projetos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row mt-80">
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/1.png" alt="" />
              </div>
              <span className="mb-30 p-color">05 .</span>
              <h6 className="mb-20">React</h6>
              <p>
                Desenvolvimento de interfaces interativas, componentes reutilizáveis e aplicações SPA modernas.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 md-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/2.png" alt="" />
              </div>
              <span className="mb-30 p-color">06 .</span>
              <h6 className="mb-20">Angular</h6>
              <p>
                Aplicações empresariais robustas, TypeScript e arquitetura escalável para projetos complexos.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15 sm-mb50">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/0.png" alt="" />
              </div>
              <span className="mb-30 p-color">07 .</span>
              <h6 className="mb-20">JavaScript</h6>
              <p>
                Lógica de front-end, manipulação de DOM e integração com APIs RESTful e GraphQL.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="item-box radius-15">
              <div className="icon-img-70 mb-40 opacity-3">
                <img src="/assets/imgs/serv-icons/7.png" alt="" />
              </div>
              <span className="mb-30 p-color">08 .</span>
              <h6 className="mb-20">Analytics</h6>
              <p>
                Google Analytics, Hotjar, testes A/B e análise de comportamento do usuário para otimização.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feat; 