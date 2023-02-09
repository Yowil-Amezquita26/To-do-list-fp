import React from "react";

function CarouselItems({ slide, startSlideTimer, stopSlideTimer }) {
  if (slide != "") {
    return (
      <>
        <div
          className="carousel-item"
          onMouseEnter={stopSlideTimer}
          onMouseOut={startSlideTimer}
        >
          <img className="imageGallery" src={slide} alt="" />
        </div>
      </>
    );
  }
}

export default CarouselItems;
