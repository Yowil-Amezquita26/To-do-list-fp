import React, { useState } from "react";
import { putTicket } from "../../services/putTicket";


const AddTickets = ({ closeModal }) => {
  const storage = window.localStorage;
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
  
  const handleSubmit = (event)=> {
    putTicket(form)
  }

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
            onChange={handleInputChange}
          />
          <label htmlFor="desciption"> Description</label>
          <input
            type="text"
            id="desciption"
            name="desciption"
            onChange={handleInputChange}
          />
        </form>
          <div>
            <button type="" onClick={handleSubmit} >Save</button>
          </div>
      </div>
    </div>
  );
};

export default AddTickets;
