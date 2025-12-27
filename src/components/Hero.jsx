import React from 'react';

// Ahora Hero recibe "props" como argumento
function Hero({ title, subtitle }) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop" 
               className="d-block mx-lg-auto img-fluid rounded shadow" 
               alt="Aprender Inglés" 
               width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          {/* Usamos las variables aquí con llaves {} */}
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">
            {subtitle}
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Reservar Clase</button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Saber más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
