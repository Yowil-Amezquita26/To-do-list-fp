import React, { useState } from "react";
import { editTicket } from "../../hooks/editTicket";
import { putTicket } from "../../hooks/putTicket";

const EditTickets = ({ closeEditModal, data }) => {
  const [form, setForm] = useState({
    title: data.title,
    desciption: data.desciption,
    status: data.status,
  });
  const handleInputChange = (event) => {
    console.log(event, "funciona");
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    console.log("A name was submitted: " + form);
    event.preventDefault()
    // putTicket(form)
    editTicket(form,data._id)
    console.log(form, data._id)
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeEditModal(false)}> X </button>
        </div>
        <h2>Edit Task</h2>
        <form action="" onSubmit={handleSubmit} className="addTicketForm">
          <label htmlFor="title"> Title</label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={handleInputChange}
            value={form.title}
          />
          <label htmlFor="desciption"> Description</label>
          <input
            type="text"
            id="desciption"
            name="desciption"
            onChange={handleInputChange}
            value={form.desciption}
          />
          <label htmlFor="status"> Status </label>
          <select name="status" id="status" onChange={handleInputChange}>
            <option value="not done">Not Done</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTickets;
