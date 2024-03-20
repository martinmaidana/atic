import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo-terruneo.png";
import "./navbar.css";

export default function App() {
  return (
    <div className="navbar">
      <Navbar className="navi" isBordered isBlurred={false}>
        <NavbarBrand>
          <img className="logo" src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarContent className=" sm:flex gap-4" justify="end">
          <NavbarItem>
            <Link className="Link" color="foreground" href="#">
              ATIC
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="Link" href="#" color="foreground">
              SERVICIOS
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="Link" color="foreground" href="#">
              TERRUNEO
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" className="buttonStyle">
              Contactanos
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <div class="terruneo">
        <div className="logoTerruneo">
          <img className="logo2" src={logo2} alt="logo2" />
          <p>
            <span class="blanco"> terru</span>
            <span class="naranja">neo</span>
          </p>
        </div>

        <p class="sub">Gestioná el terriotorio desde las alturas</p>
      </div>
    </div>
  );
}
