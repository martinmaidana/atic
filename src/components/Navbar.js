import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";

export default function App() {
  return (
    <div className="navbar">
      <nav className="navi">
        <section>
          <img className="logo" src={logo} alt="logo" />
        </section>
        <div className="nav-links">
          <a className="Link" href="#">
            ATIC
          </a>
          <a className="Link" href="#">
            SERVICIOS
          </a>
          <a className="Link" href="#">
            TERRUNEO
          </a>
        </div>
        <div className="nav-buttons">
          {/* <a href="#" className="login-link">
            Login
          </a> */}
          <a href="#" className="contact-button">
            Contactanos
          </a>
        </div>
      </nav>
      <div className="terruneo">
        <div className="logoTerruneo">
          <img className="logo2" src="../assets/logo-terruneo.png" alt="logo2" />
          <p>
            <span className="terruneo-titulo-blanco"> terru</span>
            <span className="terruneo-titulo-naranja">neo</span>
          </p>
        </div>
        <p className="sub">Gestioná el terriotorio desde las alturas</p>
      </div>
    </div>
  );
}

