import React from "react";
import "./carouselControler.css"
function CarouselControler({prev,next}) {
  return (
    <>
      <button className="carousel-control left" onClick={prev}>Prev</button>
      <button className="carousel-control rigth" onClick={next}>Next</button>
    </>
  );
}

export default CarouselControler;
