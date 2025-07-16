import React from 'react';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <a href="/">
                <img src="/assets/imgs/logo-light.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contato</h6>
              <h6 className="p-color fw-400">
                Distrito Federal, Brasília <br /> UX/UI Designer Sênior
              </h6>
              <h6 className="mt-30 mb-15">
                <a href="mailto:alessandroz.br@gmail.com">alessandroz.br@gmail.com</a>
              </h6>
              <a href="https://wa.me/5561999341003" className="underline">
                <span className="fz-22 main-color">+55 61 99934 1003</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Links Úteis</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/sobre">Sobre</a>
                </li>
                <li className="mb-15">
                  <a href="/servicos">Serviços</a>
                </li>
                <li className="mb-15">
                  <a href="/portfolio">Portfólio</a>
                </li>
                <li className="mb-15">
                  <a href="/ferramentas">Ferramentas</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li>
                <li>
                  <a href="/conversar">Vamos conversar?</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Seu e-mail" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              © 2024 Ale.br.com - Design UX UI Sênior
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <img src="/assets/imgs/patterns/blur1.png" alt="" />
      </div>
    </footer>
  );
}

export default Footer;
