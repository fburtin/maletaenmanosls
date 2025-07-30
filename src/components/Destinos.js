import React from 'react';

const destinos = [
  { nombre: 'París', imagen: 'https://source.unsplash.com/400x300/?paris' },
  { nombre: 'Roma', imagen: 'https://source.unsplash.com/400x300/?rome' },
  { nombre: 'Tokio', imagen: 'https://source.unsplash.com/400x300/?tokyo' },
];

function Destinos() {
  return (
    <section id="destinos" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Destinos Populares</h2>
        <div className="row">
          {destinos.map((destino, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={destino.imagen} alt={destino.nombre} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title text-center">{destino.nombre}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Destinos;
