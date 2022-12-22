import React from "react";
import "./gallery.css";
import Carousel from "../../carousel/Carousel";
import CarouselControler from "../../carousel/CarouselControler";
function Gallery({ ticket, closeModal }) {
  console.log("object");

  return (
    <>
      <section className="modalBackground">
        <div className="modalContainer">
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <Carousel slides={ticket.images} />
        </div>
      </section>
    </>
  );
}

export default Gallery;
