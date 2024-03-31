import React from "react";
import Slider from "react-slick";
import "../components/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-prev-arrow" onClick={onClick}>
        {"<"}
      </button>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <button className="custom-arrow custom-next-arrow" onClick={onClick}>
        {">"}
      </button>
    );
  };

  const settings = {
    customPaging: function (i) {
      return <p className="carousel-line">-</p>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide slide1">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                <p>
                  <strong className="subtitle">Ambito urbano</strong>
                </p>
              </div>
              <div className="carrousel-parrafos">
                <p className="white-P">
                  <span className="white-paragraph"></span>- Detección de
                  construcciones no declaradas.
                </p>
                <p className="white-P">
                  <span className="white-paragraph"></span>- Actualización del
                  parcelario catastral.
                </p>
                <p className="white-P">
                  <span className="white-paragraph"></span>- Clasificación de
                  coberturas y usos del suelo.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide2">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Campo</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Cultivos:
                    identificación, análisis y predicción.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Actualización del
                    parcelario catastral.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Clasificación de
                    - Identificación de plagas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide3">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Medio ambiente</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Gestión de
                    Cuencos y Humedales.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Erosión del
                    suelo.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Mapeo de
                    hábitats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide4">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Cartografía</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Mapas
                    catastrales.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Mapas viales y de
                    infraestructuras.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Modelos digitales
                    de elevación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide5">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Suelo</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Detección de
                    construcciones no declaradas.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Actualización del
                    parcelario catastral.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Clasificación de
                    coberturas y usos del suelo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide6">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Atmósfera</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Calidad del aire.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Gestión y
                    predicción de catástrofes.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Estudio del
                    cambio climático.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide slide7">
          <div className="slide-content">
            <div>
              <h2>
                <span className="white-text">EXPLORA NUESTROS </span>
                <br></br>
                <span className="orange-text">CAMPOS DE ACCIÓN</span>
              </h2>
              <div className="carrousel-subtitle-parrafos">
                <div>
                  <p>
                    <strong className="subtitle">Ambito urbano</strong>
                  </p>
                </div>
                <div className="carrousel-parrafos">
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Detección de
                    construcciones no declaradas.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Actualización del
                    parcelario catastral.
                  </p>
                  <p className="white-P">
                    <span className="white-paragraph"></span>- Clasificación de
                    coberturas y usos del suelo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
