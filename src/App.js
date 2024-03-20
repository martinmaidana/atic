import React from "react";
import "./global.css";
// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import Home from "./pages/Home.js";
import Header from "./components/Header.js";
import Facil from "./components/Facil.js"
import Componente4 from "./components/Componente4.js";
import Carousel from "./components/Carousel.js"
import Footer from "./components/Footer.js"




function App() {
  return (
    <div className="App">
      <NextUIProvider>
        <Home/>
        <Header/>
        <Facil/>
        <Componente4/>
        <Carousel/>
        <Footer/>
      </NextUIProvider>
    </div>
  );
}

export default App;
