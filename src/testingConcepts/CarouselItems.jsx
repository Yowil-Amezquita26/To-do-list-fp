import React from "react";

function CarouselItems({slide}) {
    if (slide != "") {
        
        return (
          <div className="carousel-item">
            <img className="imageGallery" src={slide} alt="" />
          </div>
        );
    }
}

export default CarouselItems;
