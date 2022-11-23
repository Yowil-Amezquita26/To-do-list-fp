import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTicket } from "../../services/deleteTicket";
import { useNavigate } from "react-router-dom";
import { getTicket } from "../../hooks/getTicket";
import { getUser } from "../../hooks/getUser";
import EditTickets from "./EditTickets";
import "./TicketStyle.css";

const Ticket = (tickets) => {
  const storage = window.localStorage; 
  const navigate = useNavigate();
  const [openEditModal, setOpenEditModal] = useState(false);
  const {id} = useParams()
  let url = `https://to-do-list-be.onrender.com/api/user/${storage.getItem("UserEmail")}/`
  
  const { user, isPending, error } = getUser(url);
  if (isPending) {
    return (
      <h2>
        <b>Loading...</b>
      </h2>
    );
  }
  console.log(user)
  console.log(user.userDB._id);
  let ticket = user.userDB.tickets.filter(ticket => ticket._id == id)
  console.log(ticket);
  const handleDelete = (event) =>{
    event.preventDefault();
    deleteTicket(user.userDB._id,id)
    if (storage.getItem("deleted")) {
      navigate("/task");
    }
  }
  return (
    <>
      {openEditModal && <EditTickets closeEditModal={setOpenEditModal} data={ticket[0]}/>}
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenEditModal(true);
        }}
      >
        Edit Ticket
      </button>
      <button onClick={handleDelete}>Delete Ticket</button>
      <div className="CardTicket" >
        <h1>Hello</h1>
        <h3>Title: {ticket[0].title}</h3>
        <h4>Description: {ticket[0].desciption}</h4>
        <h4>Status:{ticket[0].status} </h4>
        
      </div>
    </>
  );
};

export default Ticket;
