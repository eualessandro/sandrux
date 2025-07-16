'use client';
import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
function Header() {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <div
      className="header header-personal valign bg-img"
      data-background="/assets/imgs/header/p0.jpg"
      data-overlay-dark="2"
      style={{
        backgroundSize: '120% auto',
        backgroundPosition: 'center 29%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container ontop">
        <div className="row">
          <div className="col-lg-7">
            <div className="caption">
              <h6 className="mb-15">
                <span className="icon-img-30 mr-10">
                  <img src="/assets/imgs/header/hi.png" alt="" />
                </span>{' '}
                Olá! eu sou
              </h6>
              <h1 className="fw-700 mb-10">
                Alessandro <span className="main-color">Rodrigues</span>
              </h1>
              <h3>Designer UX/UI Sênior</h3>
              <div className="row">
                <div className="col-lg-9">
                  <div className="text mt-30">
                    <p>
                      Designer UX/UI Sênior com mais de 7 anos de experiência na criação de interfaces digitais centradas no usuário para aplicações web e mobile. Especialista em prototipação de alta fidelidade, acessibilidade (WCAG), usabilidade, design responsivo, e implementação front-end com foco em performance.
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-60">
                    <a
                      href="/conversar"
                      className="butn butn-md butn-bord radius-30"
                    >
                      <span className="text">Entre em Contato</span>
                    </a>
                    <div className="icon-img-60 ml-20">
                      <img
                        src="/assets/imgs/icon-img/arrow-down-big.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="info d-flex align-items-center justify-content-end mt-100">
          <div className="item">
            <h6 className="sub-title mb-10">Email :</h6>
            <span className="p-color">alessandroz.br@gmail.com</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Telefone :</h6>
            <span className="p-color">(61) 99934-1003</span>
          </div>
          <div className="item">
            <h6 className="sub-title mb-10">Localização :</h6>
            <span className="p-color">Vicente Pires – DF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
