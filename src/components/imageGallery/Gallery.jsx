import React from "react";
import "./gallery.css";
import Carousel from "../carousel/Carousel";


export const Gallery = ({ ticket, closeModal, newData }) =>{
  const storage = window.localStorage;
  storage.setItem("currentGallery", ticket._id);

  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <>
      <div className="modal" onClick={() => closeModal(false)}>
        <div className="modalContainer" onClick={handleModalContainerClick}>
          <div className="closeButton">
            <button onClick={() => closeModal(false)}> X </button>
          </div>
          <Carousel
            slides={ticket?.images}
            closeModal={closeModal}
            newData={newData}
          />
        </div>
      </div>
    </>
  );
}


