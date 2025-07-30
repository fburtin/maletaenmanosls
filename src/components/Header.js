import React from 'react';

function Header() {
  return (
    <header className="bg-primary text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">Maleta en Mano</h1>
        <nav>
          <a href="#destinos" className="text-white me-3 text-decoration-none">Destinos</a>
          <a href="#contacto" className="text-white text-decoration-none">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
