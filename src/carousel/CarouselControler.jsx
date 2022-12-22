import React from "react";
import "./carouselControler.css";
import CarouselIndicator from "./CarouselIndicator";
function CarouselControler({ prev, next, slides, currentIndex }) {
  return (
    <>
      <div className="carousel-control">
        <button className="left" onClick={prev}>Prev</button>
        <CarouselIndicator slides={slides} currentIndex ={currentIndex}/>
        <button className="rigth" onClick={next}>Next</button>
      </div>
    </>
  );
}

export default CarouselControler;
