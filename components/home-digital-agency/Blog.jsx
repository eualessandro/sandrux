import React from 'react';

function Blog() {
  return (
    <section className="blog style2">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Meus Artigos</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Últimas <span className="fw-200">Notícias.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/blog-grid-sidebar"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>Ver Todos</span>
              </a>
              <span className="icon ti-arrow-top-right"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">Por : Alessandro</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">14 de Agosto, 2024</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/1.jpg" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>Inspiração em Design: Onde Encontrar Ideias Criativas</h5>
                <a
                  href="/blog-details"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Ler mais</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">Por : Alessandro</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">14 de Agosto, 2024</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/2.jpg" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>Tipografia: Escolhendo Fontes para Máximo Impacto</h5>
                <a
                  href="/blog-details"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Ler mais</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="info sub-title p-color d-flex align-items-center mb-20">
                <div>
                  <a href="/blog-grid-sidebar">Por : Alessandro</a>
                </div>
                <div className="ml-30">
                  <a href="/blog-grid-sidebar">14 de Agosto, 2024</a>
                </div>
              </div>
              <div className="img fit-img">
                <img src="/assets/imgs/blog/3.jpg" alt="" />
              </div>
              <div className="cont pt-30">
                <h5>UX/UI Design: Tendências para 2024</h5>
                <a
                  href="/blog-details"
                  className="butn-crev d-flex align-items-center mt-30"
                >
                  <span className="hover-this">
                    <span className="circle hover-anim">
                      <i className="ti-arrow-top-right"></i>
                    </span>
                  </span>
                  <span className="text">Ler mais</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
