import React, { useState, useEffect, useRef } from "react";
import CarouselItems from "./CarouselItems";
import "./carousel.css";
import CarouselControler from "./CarouselControler";

function Carousel({ slides }) {
  const images = slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : images.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < images.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < images.length - 1 ? currentSlide + 1 : 0
      );
    }, 3000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();

    return () => stopSlideTimer();
  }, []);

  return (
    <>
      <div className="carouselContainer">
        <div className="carousel">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {images.map((slide, index) => (
              <CarouselItems
                slide={slide.url}
                key={index}
                startSlideTimer={startSlideTimer}
                stopSlideTimer={stopSlideTimer}
              />
            ))}
          </div>
        </div>
      </div>
      <CarouselControler prev={prev} next={next} slides={slides} currentIndex ={currentSlide}/>
    </>
  );
}

export default Carousel;
