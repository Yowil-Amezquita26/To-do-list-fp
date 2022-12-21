import React from "react";
import "./gallery.css";
import Carousel from "../../testingConcepts/Carousel";
function Gallery({ ticket, closeModal }) {
  console.log("object");
  return (
    <>
      <section className="modalBackground">
        <div className="modalContainer">
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <div className="carouselContainer">
            <Carousel slides={ticket.images}/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
