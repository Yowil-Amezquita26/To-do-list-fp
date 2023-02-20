import React, { useState } from "react";
import { deleteImages } from "../../../services/deleteImages";
import deleteTicket from "../../../services/deleteTicket";
import editTicket from "../../../services/editTicket";

const Details = ({ closeModal, ticket, refresh }) => {
  const storage = window.localStorage;
  const [edit, setEdit] = useState(false);
  const cloudName = import.meta.env.VITE_REACT_APP_CLOUDNAME;
  const uploadPreset = import.meta.env.VITE_REACT_APP_UPLOADPRESET;
  const [details, setDetails] = useState({
    title: ticket.title,
    desciption: ticket.desciption,
    status: ticket.status,
    images: ticket.images,
  });
  const handleInputChange = (event) => {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let result = await editTicket(details, ticket._id);
    if (result == "success") {
      closeModal(false);
      refresh(true);
    }
    {
      closeModal, refresh;
    }
  };
  const handleDelete = async (event) => {
    event.preventDefault();
    deleteImages(ticket);
    let result = await deleteTicket(storage.getItem("UserId"), ticket._id);
    if (result == "success") {
      closeModal(false);
    }
  };

  const handleOpenWidget = (event) => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          details.images.push({
            public_id: result.info.public_id,
            url: result.info.url,
          });
        }
      }
    );
    myWidget.open();
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
                value={details.title}
              />
              <label htmlFor="desciption"> Description</label>
              <input
                type="text"
                id="desciption"
                name="desciption"
                className="formInput"
                onChange={handleInputChange}
                value={details.desciption}
              />
              <label htmlFor="status"> Status </label>
              <select
                name="status"
                id="status"
                className="formSelect"
                onChange={handleInputChange}
                value={details.status}
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
            <button
              id="file"
              name="file"
              onClick={() => handleOpenWidget({ details })}
            >
              {" "}
              Upload file
            </button>
            <button className="detailsButton" onClick={() => setEdit(false)}>
              Detail
            </button>
          </section>
        ) : (
          <section className="detailContainer">
            <h2>Details</h2>
            <h2 className="detailTitle">Title:</h2>
            <h3 className="detailInfo"> {details.title}</h3>
            <h2 className="detailTitle">Description:</h2>
            <p className="detailInfo"> {details.desciption}</p>
            <h2 className="detailTitle">Status:</h2>
            <h3 className="detailInfo"> {details.status}</h3>

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
