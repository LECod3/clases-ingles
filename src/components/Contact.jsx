import React, { useState } from "react";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-3">
            <h3>¿Listo para empezar?</h3>
            <p>Déjame tus datos y me pondré en contacto contigo hoy mismo.</p>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-6">
            {enviado ? (
              <div
                className="alert alert-success text-center p-5 shadow-sm"
                role="alert"
              >
                <h4 className="alert-heading display-6">
                  ¡Gracias {nombre}! 🚀
                </h4>
                <p className="mt-3">He recibido tu mensaje correctamente.</p>
                <hr />
                <p className="mb-0">
                  Te escribiré a <strong>{email}</strong> muy pronto.
                </p>
                <button
                  className="btn btn-outline-success mt-4"
                  onClick={() => {
                    setEnviado(false);
                    setNombre("");
                    setEmail("");
                    setMensaje("");
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-4 rounded text-dark shadow-sm"
              >
                <div className="mb-3">
                  <label className="form-label">Tu Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Tu Email (para responderte)
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mensaje o Consulta</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={mensaje}
                    onChange={(e) => setMensaje(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="text-center mt-5 small text-white">
          &copy; 2025 Luciano Caro
        </div>
      </div>
    </footer>
  );
}

export default Contact;
