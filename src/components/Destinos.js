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
      
      </div>
    </section>
  );
}

export default Destinos;
