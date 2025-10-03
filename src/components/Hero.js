import React from "react";

export default function Hero() {
  const IMAGES = [

    "/promos/WhatsApp Image 2025-10-03 at 07.38.43 (1).jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.42 (1).jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.41 (1).jpeg",

    "/promos/WhatsApp Image 2025-10-03 at 07.38.41 (2).jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.42.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.43.jpeg",

    "/promos/WhatsApp Image 2025-10-03 at 07.48.40.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.48.41.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.30.jpeg",

    "/promos/WhatsApp Image 2025-10-03 at 07.38.33.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.40.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.41.jpeg",

    "/promos/WhatsApp Image 2025-10-03 at 07.41.55.jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.38.40 (2).jpeg",
    "/promos/WhatsApp Image 2025-10-03 at 07.41.55 (1).jpeg",

    "/promos/WhatsApp Image 2025-10-03 at 07.41.55 (2).jpeg"
  ];

  return (
    <div className="container mt-5 text-center">
      <h3 className="country-title mb-4">PROMOCIONES CUPOS LIMITADOS</h3>
      <div className="row justify-content-center">
        {IMAGES.map((src, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4 d-flex flex-column align-items-center">
            <div className="w-100" style={{ maxWidth: "400px" }}>
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