import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer id="contacto" className="footer-custom text-center py-4">
      <div className="container">
        <p>📞 +54 9 2478 46-4854 Sandra</p>
        <p>✉️ ventas@maletaenmanosls.com</p>

        <div className="mt-3 d-flex flex-column align-items-center gap-2">
          <div className="d-flex align-items-center gap-2">
            <FaInstagram className="fs-4" />
            <a
              href="https://www.instagram.com/maletaenmanoviajes_sls"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              @maletaenmanoviajes_sls
            </a>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaWhatsapp className="fs-4" />
            <a
              href="https://wa.me/5492478464854"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none"
            >
              +54 9 2478 46-4854
            </a>
          </div>
        </div>

        <p className="mt-4 mb-0">© 2025 Maleta en Mano - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
