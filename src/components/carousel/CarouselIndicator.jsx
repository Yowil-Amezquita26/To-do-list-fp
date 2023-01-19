import React from "react";

function CarouselIndicator({ slides, currentIndex }) {
  return (
    <>
      {slides.map((_, index) => (
        <div key={`carousel-indicator${index}`}>
          <button
            className={`carousel-indicator-item${
              currentIndex == index ? ` active` : ""
            }`}
          ></button>
        </div>
      ))}
    </>
  );
}

export default CarouselIndicator;
