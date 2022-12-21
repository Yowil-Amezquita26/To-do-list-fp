import React, { useState } from "react";
import { putTicket } from "../../../services/putTicket";

const AddTickets = ({
  closeModal,
  isPending,
  setUpdate,
  form,
  setform,
  handleOpenWidget,
  handleInputChange,
}) => {

  const handleSubmit = () => {
    putTicket(form, { closeModal }, { isPending }, { setUpdate });
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
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

export default AddTickets;
