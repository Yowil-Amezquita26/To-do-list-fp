import React, { useState } from "react";

const AddTickets = ({ closeModal }) => {
  const [form, setForm] = useState({
    title: "",
    desciption: "",
    status: "",
  });
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <h2>Add a Task</h2>
        <form action="" className="addTicketForm">
          <label htmlFor="title"> Title</label>
          <input type="text" id="title" name="title"/>
          <label htmlFor="desciption"> Description</label>
          <input type="text" id="desciption" name="desciption" />
          <label htmlFor="status"> Status</label>
          <input type="checkbox" id="status" name="status" />
          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTickets;
