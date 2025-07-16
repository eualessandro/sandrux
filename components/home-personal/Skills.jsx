import React from 'react';

function Skills() {
  return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Minhas <br />
                <span className="opacity-7">Habilidades Técnicas.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s1.png" alt="" />
                </div>
                <span className="value">95%</span>
              </div>
              <h6 className="fz-18">Figma</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s2.png" alt="" />
                </div>
                <span className="value">90%</span>
              </div>
              <h6 className="fz-18">React</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s3.png" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Angular</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s5.png" alt="" />
                </div>
                <span className="value">88%</span>
              </div>
              <h6 className="fz-18">JavaScript</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s4.png" alt="" />
                </div>
                <span className="value">92%</span>
              </div>
              <h6 className="fz-18">Adobe XD</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s6.png" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">HTML/CSS</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
