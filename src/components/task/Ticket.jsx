import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getTicket } from "../../hooks/getTicket";
import { getUser } from "../../hooks/getUser";
import EditTickets from "./EditTickets";
import "./TicketStyle.css";

const Ticket = (tickets) => {
  const storage = window.localStorage; 
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
  let ticket = user.userDB.tickets.filter(ticket => ticket._id == id)
  console.log(ticket);
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
      <div className="CardTicket" >
        <h3>Title: {ticket[0].title}</h3>
        <h4>Description: {ticket[0].desciption}</h4>
        <h4>Status:{ticket[0].status} </h4>
        
      </div>
    </>
  );
};

export default Ticket;
