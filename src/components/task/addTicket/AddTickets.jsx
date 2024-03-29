import React, { useState } from "react";
import { putTicket } from "../../../services";

export const AddTickets = ({
  closeModal,
  refresh,
  form,
  handleOpenWidget,
  handleInputChange,
}) => {
  const handleSubmit = async () => {
    let result = await putTicket(form);
    if (result == "success") {
      closeModal(false);
      refresh(true);
    }
  };
  const handleModalContainerClick = (e) => e.stopPropagation();

  return (
    <div className="modal" onClick={() => closeModal(false)}>
      <div className="modalContainer" onClick={handleModalContainerClick}>
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <h2>Add a Task</h2>
        <form action="" className="addTicketForm">
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="formInput"
            onChange={handleInputChange}
          />
          <label htmlFor="desciption"> Description</label>
          <input
            type="text"
            id="desciption"
            name="desciption"
            className="formInput"
            onChange={handleInputChange}
          />
        </form>
        <button id="file" name="file" onClick={() => handleOpenWidget()}>
          {" "}
          Upload file
        </button>
        <div>
          <button type="" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
