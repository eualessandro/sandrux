import React from 'react';

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">Descrição</h6>
                  <h3 className="mb-30">
                    Prototipação de alta fidelidade,{' '}
                    <span className="fw-300">design systems</span>{' '}
                    <span className="fw-300">modulares</span> e interfaces responsivas.
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">
                    Utilizo as ferramentas mais avançadas do mercado para criar experiências
                    digitais excepcionais, com foco em usabilidade e acessibilidade.
                  </p>
                  <p>
                    Cada projeto é desenvolvido com atenção aos detalhes, garantindo
                    que as interfaces sejam intuitivas, acessíveis e visualmente atrativas.
                  </p>

                  <div className="mt-30">
                    <ul className="rest dot-list">
                      <li className="mb-10">Figma - Design Colaborativo</li>
                      <li className="mb-10">Adobe XD - Prototipação Avançada</li>
                      <li className="mb-10">Sketch - Design de Interface</li>
                      <li className="mb-10">Design Systems Modulares</li>
                      <li>Interfaces Responsivas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="numbers mt-80 md-mb50">
              <div className="row lg-marg justify-content-center">
                <div className="col-md-6">
                  <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                    <div>
                      <h3 className="fw-300 mb-10">100%</h3>
                      <h6 className="p-color sub-title">
                        Satisfação dos Clientes
                      </h6>
                    </div>
                    <div className="ml-auto">
                      <div className="icon-img-40">
                        <img src="/assets/imgs/arw0.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* 6700 Projects Completed removido conforme solicitado */}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src="/assets/imgs/intro/2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro; 