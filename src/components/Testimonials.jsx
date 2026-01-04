import React from "react";

function Testimonials({ reviews }) {
  return (
    <section id="clases" className="container py-5">
      <h2 className="text-center mb-5">Lo que dicen mis alumnos</h2>
      <div className="row">
        {reviews.map((review, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <p className="card-text fst-italic">"{review.text}"</p>
                <div className="d-flex align-items-center mt-3">
                  <div
                    className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center me-3"
                    style={{ width: "40px", height: "40px" }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h6 className="card-title mb-0">{review.name}</h6>
                    <small className="text-muted">Alumno</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
