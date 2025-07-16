'use client';
import React from 'react';

function Marq2() {
  const marquess = ['Design que Inspira', 'Experiências que Encantam', 'Vamos Criar Juntos?', 'Seu Projeto, Minha Missão']; // Replace with your actual array
  const AllMarquess = Array(3).fill(marquess).flat();
  const contact = ['Transforme Sua Ideia', 'Em Realidade Digital', 'Inove com Design', 'Crie o Futuro Hoje']; // Replace with your actual array
  const AllContact = Array(3).fill(contact).flat();

  return (
    <section className="call-marq section-padding o-hidden">
      <div className="main-marq lrg sub-bg pt-20 pb-20">
        <div className="slide-har st1">
          <div className="box">
            {AllMarquess.map((item, index) => (
              <div key={index} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <img src="/assets/imgs/star.png" alt="" />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <a href="/conversar" className="overlay-link"></a>
        </div>
      </div>
      <div className="main-marq bord-item">
        <div className="slide-har st2">
          <div className="box">
            {AllContact.map((item, index) => (
              <div key={index} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {AllContact.map((item, index) => (
              <div key={index} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                </h4>
              </div>
            ))}
          </div>
          <a href="/conversar" className="overlay-link"></a>
        </div>
      </div>
    </section>
  );
}

export default Marq2;
