import React from 'react';

function Experience() {
  return (
    <section className="experience section-padding bg-gray">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h6 className="sub-title main-color mb-15">Experiência Profissional</h6>
              <h3>
                Minha <br />
                <span className="opacity-7">Jornada Profissional.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="timeline">
              <div className="item mb-50">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2022 - Atual</h6>
                      <h5>PD Case — UX/UI Designer Sênior</h5>
                      <p className="text-muted">Desenvolvi interfaces e protótipos interativos no Figma para soluções web complexas. Liderança de testes de usabilidade e análises heurísticas. Aplicação de padrões de acessibilidade digital (WCAG) e melhoria contínua da experiência do usuário.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2020 - 2022</h6>
                      <h5>Sicoob – Indra — UX/UI Designer Sênior</h5>
                      <p className="text-muted">Criação de Design System institucional, integrando componentes reutilizáveis em Angular e React. Participação ativa em squads ágeis, desde discovery até entrega. Definição de KPIs de UX com base em métricas comportamentais e dados analíticos.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2019 - 2020</h6>
                      <h5>Caixa Seguradora – Millenium — UX/UI Designer Sênior</h5>
                      <p className="text-muted">Responsável pela arquitetura da informação e jornada do usuário em soluções de seguros. Aumento da satisfação dos usuários com reformulação completa de fluxos mobile.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item mb-50">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2019</h6>
                      <h5>BeepApp (Startup)</h5>
                      <p className="text-muted">Desenvolvimento de interfaces para aplicativo mobile com foco em experiência do usuário e usabilidade.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2018 - 2019</h6>
                      <h5>Capgemini</h5>
                      <p className="text-muted">Atuação em projetos de design de interfaces para grandes clientes, aplicando metodologias ágeis e design thinking.</p>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="info">
                      <h6 className="sub-title main-color mb-10">2018</h6>
                      <h5>Basis</h5>
                      <p className="text-muted">Desenvolvimento de soluções web e mobile com foco em design responsivo e acessibilidade.</p>
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

export default Experience; 