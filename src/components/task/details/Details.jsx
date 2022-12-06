import React, { useState } from "react";
import { deleteTicket } from "../../../services/deleteTicket";
import { editTicket } from "../../../services/editTicket";

const Details = ({ closeModal, ticket, isPending }) => {
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
    editTicket(form, ticket._id, { closeModal, isPending });
  };
  const handleDelete = (event) => {
    event.preventDefault();
    deleteTicket(storage.getItem("UserId"), ticket._id, {
      closeModal,
      isPending,
    });
  };

  return (
    <div className="modalBackground">
      <section className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>

        {edit ? (
          <section className="formContent">
            <h2>Edit</h2>

            <form action="" onSubmit={handleSubmit} className="formStyle">
              <label htmlFor="title" className="formLabel">
                <b>Title</b>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="formInput"
                onChange={handleInputChange}
                value={form.title}
              />
              <label htmlFor="desciption"> Description</label>
              <input
                type="text"
                id="desciption"
                name="desciption"
                className="formInput"
                onChange={handleInputChange}
                value={form.desciption}
              />
              <label htmlFor="status"> Status </label>
              <select
                name="status"
                id="status"
                className="formSelect"
                onChange={handleInputChange}
                value={form.status}
              >
                <option value="Not Done">Not Done</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
              <div>
                <button className="detailsButton" type="submit">
                  Save
                </button>
              </div>
            </form>
            <button className="detailsButton" onClick={() => setEdit(false)}>
              Detail
            </button>
          </section>
        ) : (
          <section className="detailContainer">
            <h2>Details</h2>
            <h2 className="detailTitle">Title:</h2>
            <h3 className="detailInfo"> {form.title}</h3>
            <h2 className="detailTitle">Description:</h2>
            <p className="detailInfo"> {form.desciption}</p>
            <h2 className="detailTitle">Status:</h2>
            <h3 className="detailInfo"> {form.status}</h3>

            <button className="detailsButton" onClick={() => setEdit(true)}>
              Edit
            </button>
          </section>
        )}
        <button className="detailsButton" onClick={handleDelete}>
          Delete
        </button>
      </section>
    </div>
  );
};

export default Details;
