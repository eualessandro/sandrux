import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/resume/icon1.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon2.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon3.png" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/resume/icon4.png" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Sobre Mim</h6>
              <div className="text">
                <h4 className="mb-30">
                  Sou{' '}
                  <span className="fw-200">
                    Designer UX/UI Sênior
                  </span>{' '}
                  com foco em criação de interfaces digitais centradas no usuário para aplicações web e mobile.
                </h4>
                <p>
                  Especialista em prototipação de alta fidelidade, acessibilidade (WCAG), usabilidade, design responsivo, e implementação front-end com foco em performance. Destaque para atuação em grandes empresas como Sicoob, Caixa Seguradora, Capgemini e startups, sempre entregando soluções escaláveis com foco em eficiência, conversão e experiência do usuário.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">30%</h3>
                          <h6 className="p-color sub-title">Redução no tempo de desenvolvimento</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-6">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">20%</h3>
                          <h6 className="p-color sub-title">Aumento nas conversões com testes de usabilidade</h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-6">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
