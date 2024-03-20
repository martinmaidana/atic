import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png"; // Asegúrate de tener la ruta correcta hacia tu imagen

import "../components/footer.css"; // Estilo opcional para el footer

const Footer = () => {
  return (
    <footer>
      <div class="footer">
        <div className="title">
          <div className="footer-img">
            <img className="logo-footer" src={logo} alt="logo" />
          </div>
        </div>

        <div className="footer-columns">
          <div className="footer-columns">
            <div className="columnasUnoDos">
              <div className="columnaUno">
                <div className="footer-column">
                  <p>
                    <a href="#" className="parrafo-footer">
                      Servicios
                    </a>
                  </p>
                  <p>
                    <a href="#" className="parrafo-footer">
                      Nosotros
                    </a>
                  </p>
                  <p>
                    <a href="#" className="parrafo-footer">
                      Contacto
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-column">
                <div className="columnaDos">
                  <p>
                    <a href="#" className="parrafo-footer">
                      Mapping
                    </a>
                  </p>
                  <p>
                    <a href="#" className="desarrollo parrafo-footer">
                      Desarrollo De Software
                    </a>
                  </p>
                  <p>
                    <a href="#" className="parrafo-footer">
                      Geomarketing
                    </a>
                  </p>
                  <p>
                    <a href="#" className="parrafo-footer">
                      Terruneo
                    </a>
                  </p>
                  <p>
                    <a href="#" className="parrafo-footer">
                      Consultoria
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columnasTres">
              <div className="footer-column">
                <p>
                  <a href="#" className="parrafo-telefono">
                    <i className="fas fa-phone-alt"></i> 01164660228
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:contacto@atic.com.ar"
                    className="parrafo-correoelectronico"
                  >
                    contacto@atic.com.ar
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-down">
        <div class="footer-line"></div>
        <p className="derechos">
          Todos los derechos reservados © ATIC tecnologías{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
