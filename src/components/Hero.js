import React from "react";

export default function Hero() {
  const IMAGES = [
    "/promos/cayo.jpeg",
    "/promos/jamaica.jpeg",
    "/promos/miches.jpeg",
    "/promos/portogalinhas.jpeg",
    "/promos/repdom.jpeg",
    "/promos/sanandres.jpeg",
  ];

  return (
    <div className="container mt-5 text-center">
      <h3 className="country-title mb-4">PROMOCIONES CUPOS LIMITADOS</h3>
      <div className="row justify-content-center">
        {IMAGES.map((src, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="w-100" style={{ maxWidth: "320px" }}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="img-fluid rounded-3"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}