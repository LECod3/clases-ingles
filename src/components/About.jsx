import React from 'react';

// Ahora recibimos "items" como prop
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
            {/* 
              Aquí ocurre la magia: .map() transforma cada texto del array 
              en un elemento <li> de HTML.
            */}
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
              "Aprender un idioma es abrir una puerta a un nuevo mundo. Te acompaño en cada paso."
            </p>
            <div className="display-1 text-primary">🇬🇧 🇺🇸</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
