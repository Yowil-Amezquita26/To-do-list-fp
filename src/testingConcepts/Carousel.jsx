import React, { useState, useEffect } from "react";
import CarouselItems from "./CarouselItems";
import "./carousel.css";
import CarouselControler from "./CarouselControler";

function Carousel({ slides }) {
  const images = slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const prev = () => {
    const index = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    setCurrentSlide(index);
  };
  const next = () => {
    const index = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };
    useEffect(() => {
      const slideInterval = setInterval(() => {
        setCurrentSlide(currentSlide=> currentSlide< images.length - 1? currentSlide + 1:0)
        console.log(currentSlide);
      }, 3000);

      return()=> clearInterval(slideInterval)
    }, []);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${-currentSlide * 100}%)` }}
        >
          {images.map((slide, index) => (
            <CarouselItems slide={slide.url} key={index} />
          ))}
        </div>
      </div>
      <CarouselControler prev={prev} next={next} />
    </>
  );
}

export default Carousel;
