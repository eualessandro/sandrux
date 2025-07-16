import React from 'react';

function Intro() {
  return (
    <section className="page-intro section-padding pb-0">
      <div className="container">
        <div className="row md-marg">
          <div className="col-lg-6">
            <div className="img md-mb80">
              <div className="row">
                <div className="col-12">
                  <img src="/assets/imgs/arw2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h3 className="mb-30">
                Alessandro é um{' '}
                <span className="fw-200">designer UX/UI sênior</span> criando
                experiências <span className="fw-200">digitais incríveis</span> e
                produtos inovadores.
              </h3>
              <p>
                Meus serviços de design começam e terminam com uma estratégia de
                experiência de primeira classe que constrói marcas. Especialista em
                prototipação de alta fidelidade, acessibilidade (WCAG), usabilidade
                e design responsivo com foco em performance.
              </p>
              <a href="/servicos" className="underline main-color mt-40">
                <span className="text">
                  Meus Serviços <i className="ti-arrow-top-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
