import React from 'react';

function Numbers() {
  return (
    <section className="numbers-crev section-padding o-hidden">
      <div className="container">
        <div className="row lg-marg justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">100%</h3>
              </div>
              <h6 className="p-color sub-title">Satisfação dos Clientes</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">54</h3>
              </div>
              <h6 className="p-color sub-title">Projetos Concluídos</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Numbers;
