import React from "react";
import "../../hooks/useForm"
import useForm from "../../hooks/useForm";


function AddTickets({ closeModal, form, updateForm}) {
  
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeButton">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <h2>Add a Task</h2>
        <form action="" className="addTicketForm">
          <label htmlFor="title"> Title</label>
          <input type="text" id="title" onChange={updateForm}/>
          <label htmlFor="desciption"> Description</label>
          <input type="text" id="desciption" />
          <label htmlFor="status"> Status</label>
          <input type="checkbox" id="status" />
        </form>
      </div>
    </div>
  );
}

export default AddTickets;
