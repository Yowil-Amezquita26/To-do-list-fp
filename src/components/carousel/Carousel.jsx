import React, { useState, useEffect, useRef } from "react";
import CarouselItems from "./CarouselItems";
import "./carousel.css";
import CarouselControler from "./CarouselControler";
import { deleteImage } from "../../services";

function Carousel({ slides, closeModal, newData }) {
  const [gallery, setGallery] = useState(slides);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef();

  const prev = () => {
    startSlideTimer();
    const index = currentSlide > 0 ? currentSlide - 1 : gallery.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlideTimer();
    const index = currentSlide < gallery.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < gallery.length - 1 ? currentSlide + 1 : 0
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

  const deleteSlide = async(images, currentImage, { setCurrentSlide }, newData) => {
    let result = await deleteImage(
      images[currentImage],
      newData,
    );
    if(result=="success"){

      newData(true);
      const index = images.indexOf(images[currentImage]);
      if (index > -1) {
        // only splice array when item is found
        images.splice(index, 1); // 2nd parameter means remove one item only
        setCurrentSlide(images.length - 1)
      }
    }
  };

  return (
    <>
      <div className="carouselContainer">
        <div className="carousel">
          <div
            key={`Slide#${currentSlide} {}`}
            className="carousel-inner"
            style={{ transform: `translateX(${-currentSlide * 100}%)` }}
          >
            {gallery.map((slide, index) => (
              <>
                <CarouselItems
                  slide={slide.url}
                  key={`Gallery-Ticket-Img${index}`}
                  startSlideTimer={startSlideTimer}
                  stopSlideTimer={stopSlideTimer}
                />
              </>
            ))}
          </div>
        </div>
      </div>
      <button
        className="imageDelete"
        onClick={() =>
          deleteSlide(gallery, currentSlide, { setCurrentSlide }, newData)
        }
      >
        Delete image
      </button>
      <CarouselControler
        prev={prev}
        next={next}
        slides={slides}
        currentIndex={currentSlide}
      />
    </>
  );
}

export default Carousel;
