import React from "react";
import "./gallery.css";
import Carousel from "../carousel/Carousel";
function Gallery({ ticket, closeModal, newData }) {
  const storage = window.localStorage;
  storage.setItem("currentGallery", ticket._id);

  return (
    <>
      <section className="modalBackground">
        <div className="modalContainer">
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <Carousel
            slides={ticket.images}
            closeModal={closeModal}
            newData={newData}
          />
        </div>
      </section>
    </>
  );
}

export default Gallery;
