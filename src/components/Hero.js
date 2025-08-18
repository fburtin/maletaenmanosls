import React from "react";

export default function Hero() {
  const IMAGES = [
    "/images/promo/cayo.jpeg",
    "/images/promo/jamaica.jpeg",
    "/images/promo/miches.jpeg",
    "/images/promo/portogalinhas.jpeg",
    "/images/promo/repdom.jpeg",
    "/images/promo/sanandres.jpeg",
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