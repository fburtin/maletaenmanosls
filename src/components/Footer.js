import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <footer id="contacto" className="bg-dark text-white text-center py-4">
      <div className="container">
        <p>📞 +54 9 2478 46-4854 Sandra</p>
        <p>✉️ ventas@maletaenmanosls.com</p>
         <div className="mt-3">
          <a
            href="https://www.instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4 me-3">
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5491112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-4"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="mb-0">© 2025 Maleta en Mano - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
