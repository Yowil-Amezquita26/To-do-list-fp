import React, { useState } from "react";
import { putTicket } from "../../../services/putTicket";

const AddTickets = ({ closeModal, isPending }) => {
  console.log(isPending);
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "Not Done",
  });
  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    putTicket(form, { closeModal }, { isPending });
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
