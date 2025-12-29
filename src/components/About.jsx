import React from "react";

function About({ items }) {
  return (
    <section className="container py-5" id="about">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h2 className="display-6 fw-bold mb-4">Sobre mi metodología</h2>
          <p className="lead">
            Mi enfoque se basa en <strong>tus objetivos</strong>.
          </p>
          <ul className="list-group list-group-flush mb-4">
            {items.map((item, index) => (
              <li key={index} className="list-group-item">
                ✅ {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6">
          <div className="p-5 bg-light border rounded-3 text-center">
            <h3>¿Por qué elegirme?</h3>
            <p className="mt-3">
              "Aprender un idioma es abrir una puerta a un nuevo mundo. Te
              acompaño en cada paso."
            </p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
              alt="Bandera de Estados Unidos"
              className="img-fluid mt-3 shadow-sm rounded"
              style={{ width: "120px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
