import React from 'react';

function Education() {
  return (
    <section className="education section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h6 className="sub-title main-color mb-15">Formação & Certificações</h6>
              <h3>
                Minha <br />
                <span className="opacity-7">Formação Acadêmica.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="education-item mb-50">
              <div className="item">
                <div className="icon">
                  <i className="ti-graduation-cap"></i>
                </div>
                <div className="cont">
                  <h6 className="sub-title main-color mb-10">Formação Acadêmica</h6>
                  <h5>Bacharelado em Ciência da Computação</h5>
                  <p className="text-muted">UNICEUB – Universidade Centro de Brasília</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="education-item mb-50">
              <div className="item">
                <div className="icon">
                  <i className="ti-certificate"></i>
                </div>
                <div className="cont">
                  <h6 className="sub-title main-color mb-10">Certificações</h6>
                  <div className="certifications">
                    <p className="text-muted mb-2">• Google Analytics Individual Qualification – Google</p>
                    <p className="text-muted mb-2">• Liferay Certified Professional</p>
                    <p className="text-muted mb-2">• HTML5 – Microsoft (Homologado pelo W3C)</p>
                    <p className="text-muted mb-2">• WordPress no Azure – Microsoft</p>
                    <p className="text-muted mb-2">• Front-end Development – Udemy</p>
                    <p className="text-muted">• UX & Interfaces Modernas – Microsoft</p>
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

export default Education; 