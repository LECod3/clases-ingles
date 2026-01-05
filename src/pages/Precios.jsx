import React from "react";

function Precios() {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Planes y Precios</h1>
          <p className="lead text-muted">
            Elige el plan que mejor se adapte a tus necesidades de aprendizaje.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Plan Grupal */}
          <div className="col">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white text-center border-primary">
                <h4 className="my-0 fw-normal">Grupal</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $3.000<small className="text-muted fw-light">/alumno</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 flex-grow-1">
                  <li className="mb-2">
                    ✓ Todo el contenido del plan individual.
                  </li>
                  <li className="mb-2">+ Para grupos de 2 a 5 personas.</li>
                  <li className="mb-2">
                    + Interacción y conversación constante.
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="w-100 btn btn-lg btn-outline-primary mt-auto"
                >
                  Consultar Ahora
                </a>
              </div>
            </div>
          </div>

          {/* Plan Individual */}
          <div className="col">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white text-center">
                <h4 className="my-0 fw-normal">Individual</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $4.000<small className="text-muted fw-light">/hora</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 flex-grow-1">
                  <li className="mb-2">✓ Clases 1 a 1 personalizadas.</li>
                  <li className="mb-2">✓ Horarios flexibles.</li>
                  <li className="mb-2">
                    ✓ Material de estudio y práctica incluido.
                  </li>
                  <li className="mb-2">
                    ✓ Seguimiento de progreso a lo largo de las clases.
                  </li>
                  <li className="mb-2">
                    ✓ Incluye mi numero de telefono personal para consultas.
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="w-100 btn btn-lg btn-outline-primary mt-auto"
                >
                  Consultar Ahora
                </a>
              </div>
            </div>
          </div>

          {/* Plan Online */}
          <div className="col">
            <div className="card h-100 shadow-sm border-primary">
              <div className="card-header py-3 bg-primary text-white text-center">
                <h4 className="my-0 fw-normal">Online</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <h1 className="card-title pricing-card-title text-center">
                  $2.500<small className="text-muted fw-light">/hora</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4 flex-grow-1">
                  <li className="mb-2">
                    ✓ Todo el contenido del plan individual.
                  </li>
                  <li className="mb-2">
                    + Clases a distancia con Zoom, Teams o Google Meet.
                  </li>
                  <li className="mb-2">
                    + Recursos multimedia para practicar en casa.
                  </li>
                </ul>
                <a
                  href="/#contact"
                  className="w-100 btn btn-lg btn-outline-primary mt-auto"
                >
                  Consultar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Precios;
