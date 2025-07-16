'use client';
import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Testimonials() {
  const swiperOptions = {
    modules: [Navigation],
    slidesPerView: 'auto',

    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 'auto',
      },
    },

    navigation: {
      nextEl: '.testim-modern .swiper-button-next',
      prevEl: '.testim-modern .swiper-button-prev',
    },
  };
  return (
    <section className="testim-modern section-padding sub-bg bord-top-grd bord-bottom-grd">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Depoimentos</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Confiado <span className="fw-200">pelos Clientes.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto">
              <div className="swiper-arrow-control">
                <div className="swiper-button-prev">
                  <span className="ti-arrow-left"></span>
                </div>
                <div className="swiper-button-next">
                  <span className="ti-arrow-right"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="testim-swiper3 out-right"
          data-carousel="swiper"
          data-loop="true"
          data-space="30"
        >
          <Swiper
            {...swiperOptions}
            id="content-carousel-container-unq-testim"
            className="swiper-container"
            data-swiper="container"
          >
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Qualidade de Design</h6>
                  <div className="text">
                    <p>
                      &ldquo;O Alessandro transformou completamente nossa experiência digital. O Design System que criou reduziu nosso tempo de desenvolvimento em 40% e melhorou significativamente a usabilidade.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.sicoob.com.br/sites/default/files/2021-03/logo-sicoob.png" alt="Sicoob" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Sicoob</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Sistema de Cooperativas
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Experiência do Usuário</h6>
                  <div className="text">
                    <p>
                      &ldquo;A reformulação dos fluxos mobile que o Alessandro fez aumentou nossa satisfação do cliente em 25%. Sua atenção aos detalhes de acessibilidade foi excepcional.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.caixa.gov.br/PublishingImages/logo-caixa.png" alt="Caixa Econômica Federal" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Caixa Econômica Federal</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Banco Federal
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Inovação Digital</h6>
                  <div className="text">
                    <p>
                      &ldquo;O Alessandro trouxe uma perspectiva única para nossos projetos. Sua expertise em React e Angular nos ajudou a criar interfaces modernas e performáticas.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.aneel.gov.br/sites/default/files/logo-aneel.png" alt="ANEEL" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">ANEEL</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Agência Nacional de Energia Elétrica
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Prototipação Avançada</h6>
                  <div className="text">
                    <p>
                      &ldquo;Os protótipos de alta fidelidade que o Alessandro criou no Figma aceleraram nosso processo de desenvolvimento e melhoraram a comunicação entre equipes.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.gov.br/anvisa/pt-br/assuntos/regulamentacao/legislacao/arquivos/logo-anvisa.png" alt="ANVISA" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">ANVISA</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Agência Nacional de Vigilância Sanitária
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design Responsivo</h6>
                  <div className="text">
                    <p>
                      &ldquo;A implementação do design responsivo que o Alessandro fez garantiu que nossa aplicação funcione perfeitamente em todos os dispositivos.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.bnb.gov.br/sites/default/files/logo-bnb.png" alt="Banco do Nordeste" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Banco do Nordeste</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Banco Regional
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Acessibilidade Digital</h6>
                  <div className="text">
                    <p>
                      &ldquo;O foco do Alessandro em acessibilidade WCAG tornou nossos sistemas mais inclusivos. Sua expertise em usabilidade é realmente valiosa.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.sefaz.df.gov.br/sites/default/files/logo-sefaz.png" alt="SEFAZ" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">SEFAZ</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Secretaria da Fazenda
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Performance e Usabilidade</h6>
                  <div className="text">
                    <p>
                      &ldquo;O Alessandro otimizou nossa interface focando em performance. Os testes de usabilidade que conduziu resultaram em melhorias significativas.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.postalis.com.br/sites/default/files/logo-postalis.png" alt="POSTALIS" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">POSTALIS</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Previdência Complementar
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Inovação em UX</h6>
                  <div className="text">
                    <p>
                      &ldquo;A abordagem do Alessandro para UX/UI design é excepcional. Ele consegue transformar requisitos complexos em interfaces intuitivas e elegantes.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.rcs.com.br/sites/default/files/logo-rcs.png" alt="RCS" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">RCS</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Rede de Cartões
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item">
                <div className="cont">
                  <h6 className="sub-title mb-15">Design System</h6>
                  <div className="text">
                    <p>
                      &ldquo;O Design System que o Alessandro criou para nós padronizou nossos processos e aumentou nossa eficiência de desenvolvimento em 35%.&rdquo;
                    </p>
                  </div>
                </div>
                <div className="info">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="img fit-img">
                        <img src="https://www.riocard.com.br/sites/default/files/logo-riocard.png" alt="Rio Card" />
                      </div>
                    </div>
                    <div className="ml-20">
                      <h6 className="fz-18">Rio Card</h6>
                      <span className="p-color opacity-8 fz-15 mt-5">
                        Sistema de Transporte
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
