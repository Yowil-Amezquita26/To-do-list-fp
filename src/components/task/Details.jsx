import React, { useState } from "react";
import { deleteTicket } from "../../services/deleteTicket";
import { editTicket } from "../../services/editTicket";

const Details = ({ closeModal, ticket }) => {
  const storage = window.localStorage;
  console.log(ticket);
  const [form, setForm] = useState({
    title: ticket.title,
    desciption: ticket.desciption,
    status: ticket.status,
  });
  const [edit, setEdit] = useState(false);

  const handleInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editTicket(form,ticket._id);
  };
  const handleDelete = (event) =>{
    event.preventDefault();
    deleteTicket(storage.getItem("UserId"),ticket._id)
  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>

        {edit ? (
          <div>
            <h1>Edit</h1>

            <form action="" onSubmit={handleSubmit} className="addTicketForm">
              <label htmlFor="title">
                <b>Title</b>
              </label>
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
              <select
                name="status"
                id="status"
                onChange={handleInputChange}
                value={form.status}
              >
                <option value="Not Done">Not Done</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            <div>
              <button type="submit">Save</button>
            </div>
            </form>
            <button onClick={() => setEdit(false)}>Detail</button>
          </div>
        ) : (
          <div>
            <h1>Details</h1>
            <h2>Title:</h2>
            <h3> {form.title}</h3>
            <h2>Description:</h2>
            <p> {form.desciption}</p>
            <h2>Status:</h2>
            <h3> {form.status}</h3>

            <button onClick={() => setEdit(true)}>Edit</button>
          </div>
        )}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Details;
