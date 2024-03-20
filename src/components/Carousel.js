import React from "react";
import Slider from "react-slick";
import "../components/carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "../assets/carrousel/Atmósfera 5.jpg";
import imagen2 from "../assets/carrousel/Campo 1.png";
import imagen3 from "../assets/carrousel/Medio ambiente 2.jpg";
import imagen4 from "../assets/carrousel/Cartografia 3.jpg";
import imagen5 from "../assets/carrousel/Suelo 4.jpg";
import imagen6 from "../assets/carrousel/Atmósfera 5.jpg";
import imagen7 from "../assets/carrousel/Gestión de riesgo 6.jpg";

const Carousel = () => {
  const settings = {
    customPaging: function (i) {
      return <p>.</p>;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={imagen1} alt="imagen-1" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen2} alt="imagen-2" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen3} alt="imagen-3" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen4} alt="imagen-4" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen5} alt="imagen-5" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen6} alt="imagen-6" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
        <div className="slide">
          <img src={imagen7} alt="imagen-7" />
          <div className="text-overlay">HOLA MUNDO</div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;


