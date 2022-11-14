import React, { useState } from "react";
import CustomNav from "../../components/navbar/CustomNav";
import Ticket from "../../components/task/Ticket";
import "./TaskStyles.css";
import { getUser } from "../../hooks/getUser";
import { useAuth0 } from "@auth0/auth0-react";
import AddTickets from "../../components/task/AddTickets";
import { Link } from "react-router-dom";


export default function Task() {
  const [openModal, setOpenModal] = useState(false);
  const storage = window.localStorage;
  
  let url = `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
    "UserEmail"
  )}`;

  const { user, isPending, error } = getUser(url);
  if (isPending) {
    return (
      <h2>
        <b>Loading...</b>
      </h2>
    );
  }
  console.log(user.userDB);
  return (
    <>
      <CustomNav />
      <h2>Tasks</h2>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Add Ticket
      </button>
      {openModal && <AddTickets closeModal={setOpenModal}/>}
      <div className="Status">
        <div className="Tickets">
          <h2>
            <b>To do</b>
          </h2>
          {/* <button onClick={}></button> */}
          {user.userDB.ticket.not_done.map((tickets) => (
            <div key={tickets._id} className="CardTicket">
              <h3>Title: {tickets.title}</h3>
              <h4>Description: {tickets.desciption}</h4>
              <h4>Status: {tickets.status}</h4>
              <button onClick={console.log(tickets._id)}></button>
              <Link to={`/details/${tickets._id}`}> Edit</Link>
            </div>
          ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Doing</b>
          </h2>
          {user.userDB.ticket.doing.map((tickets) => (
            <Ticket
              key={tickets._id}
              tickets={tickets}
              status={tickets.status}
            />
          ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Done</b>
          </h2>
          {user.userDB.ticket.done.map((tickets) => (
            <Ticket
              key={tickets._id}
              tickets={tickets}
              status={tickets.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
