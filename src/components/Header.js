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
      <div className="header-texto">
        <div className="parrafouno">
          <div className="titulo">
            <p>
              <span className="blanco">DESCUBRÍ EL ALCANCE </span>
            </p>
            <p>
              <span className="blanco">DE LA </span>
              <span className="naranja">TELEDETECCIÓN</span>
            </p>
          </div>
          <div className="parrafo">
            <p>
              <span className="p-blanco">La </span>
              <span className="p-naranja">detección de construcciones no </span>
            </p>
            <p>
              <span className="p-naranja"> declaradas a partir de imágenes  </span>
            </p>
            <p>

              <span className="p-naranja"> satelitales </span>
              <span className="p-blanco">generará un aumento en su  </span>
           </p>
           <p>
              <span className="p-blanco">recaudación tributaria. </span>
            </p>
            <p>
              <span className="p-blanco">Gracias a nuestra dinámica innovadora </span>
            </p>
            <p>
              <span className="p-naranja">
                simplificamos los costos y los tiempos de 
              </span>
            </p>
            <p>
              <span className="p-naranja">
               respuesta,
              </span>
              <span className="p-blanco">optimizando los resultados. </span>
            </p>
          </div>
         
        </div>
        <div className="tituloinferior">
            <p>
              <span className="blanco">LA </span>{" "}
              <span className="naranja">SOLUCIÓN MÁS </span>
            </p>
            <p>
              <span className="naranja">COMPLETA </span>
              <span className="blanco">PARA EL </span>
            </p>
            <p>
              {" "}
              <span className="blanco">TERRITORIO</span>
            </p>
          </div>
        <div className="contenedor">
          <Card className="custom-card max-w-[3rem]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={80}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={80}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">INTEGRACIÓN Y PUBLICACIÓN DE DATOS</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="card-texto card-body">
                Combiná datos de diferentes fuentes y formatos para tener una
                visión integral.
              </p>
            </CardBody>
          </Card>
          {/* ----------------------------------card 2---------------------- */}
          <Card className="custom-card max-w-[400px]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={80}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={80}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">GESTIÓN DE LA INFORMACIÓN EN MAPAS</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="card-texto card-body">
                Creá, analizá y publicá datos utilizando mapas digitales.
              </p>
            </CardBody>
          </Card>
          {/* --------------------Card 3 ---------------------------------*/}
          <Card className="custom-card max-w-[400px]">
            <CardHeader className="icon-card flex gap-3">
              <Image
                alt="nextui logo"
                height={80}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={80}
              />
              <div className="card-parrafo flex flex-col">
                <p className="card-titulo text-md">VÍNCULO ENTRE SECTORES DE LA EMPRESA</p>
              </div>
            </CardHeader>
            <CardBody>
              <p className="card-texto card-body">
                Interactuá con personas de distintos sectores con una sola
                plataforma.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Header;

