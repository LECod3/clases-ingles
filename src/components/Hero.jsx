import React from "react";
import heroImage from "../assets/imgs/clases-ingles.png";

function Hero({ title, subtitle }) {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={heroImage}
            className="d-block mx-lg-auto img-fluid rounded shadow"
            alt="Aprender Inglés"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">{title}</h1>
          <p className="lead">{subtitle}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
            >
              Reservar Clase
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Saber más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
