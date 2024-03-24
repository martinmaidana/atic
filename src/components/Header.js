import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  
  Image,
} from "@nextui-org/react";
import "../components/header.css";
const Header = () => {
  return (
   
      <div className="header-container">
        <div className="vertical-line"></div>
        <div class="header-texto">
          <div class="parrafouno">
            <div class="titulo">
              <p>
                <span class="blanco">DESCUBRÍ EL PODER </span>
              </p>
              <p>
                <span class="blanco">DE LA </span>
                <span class="naranja">TELEDETECCIÓN</span>
              </p>
            </div>

            <div class="parrafo">
              <div>
                <p>
                  <span class="p-blanco">Gracias a nuestra línea de </span>
                  <span class="p-naranja">acción integrada con</span>
                </p>
                <p>
                  <span class="p-naranja">
                    {" "}
                    inteligencia artificial territorial
                  </span>
                  <span class="p-blanco">, podemos proporcionar </span>
                </p>
                <p>
                  <span class="p-blanco">
                    una amplia variedad de utilidades para la detección y
                  </span>
                </p>
                <p class="p-blanco">
                  {" "}
                  gestión de objetos sobre la superficie terrestre para lograr
                </p>
                <p class="p-blanco"> mejores políticas públicas.</p>
              </div>

              <div class="parrafo">
                <p style={{ marginTop: "20px" }}>
                  <span class="p-blanco">
                    Ofrecemos una dinámica de trabajo eficaz y efectiva,
                  </span>
                </p>
                <p>
                  <span class="p-naranja">
                    optimizamos costos y el tiempo humano
                  </span>{" "}
                  <span class="p-blanco">con tecnologías</span>
                </p>
                <p class="p-blanco">
                  {" "}
                  de vanguardia que empleamos estratégicamente{" "}
                </p>
                <p class="p-blanco" style={{ marginBottom: "100px" }}>
                  para elevar el valor de tus procesos.
                </p>
              </div>
            </div>
          </div>
          <div class="tituloinferior">
            <p>
              <span class="blanco">LA </span>{" "}
              <span class="naranja">SOLUCIÓN MÁS </span>
            </p>
            <p>
              <span class="naranja">COMPLETA </span>
              <span class="blanco">PARA EL </span>
            </p>
            <p>
              {" "}
              <span class="blanco">TERRITORIO</span>
            </p>
          </div>
        </div>

        <div class="contenedor">
          <Card className="custom-card max-w-[3rem]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={50}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">INTEGRACIÓN Y PUBLICACIÓN DE DATOS</p>
              </div>
            </CardHeader>

            <CardBody>
              <p class="card-texto card-body">
                Combiná datos de diferentes fuentes y formatos para tener una
                vision integral.
              </p>
            </CardBody>
          </Card>

          {/* ----------------------------------card 2---------------------- */}
          <Card className="custom-card max-w-[400px]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={100}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">GESTIÓN DE LA INFORMACIÓN EN MAPAS</p>
              </div>
            </CardHeader>

            <CardBody>
              <p class="card-texto card-body">
                Creá, analizá y publicá datos utilizando mapas digitales.
              </p>
            </CardBody>
          </Card>

          {/* --------------------Card 3 ---------------------------------*/}
          <Card className="custom-card max-w-[400px]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">VÍNCULO ENTRE SECTORES DE LA EMPRESA</p>
              </div>
            </CardHeader>

            <CardBody>
              <p class="card-texto card-body">
                Interactuá con personas de distintos sectores con una sola
                plataforma.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      
  );
};
export default Header;
