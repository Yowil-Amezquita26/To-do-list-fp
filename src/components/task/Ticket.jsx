import React from "react";
import "./TicketStyle.css";

const Ticket = (tickets) => {
  // console.log(tickets);
  // console.log(tickets.status)
  // console.log(status, "hellow")
  return (
    <>
      <div className="CardTicket">
        <h3>Title: {tickets.tickets.title}</h3>
        <h4>Description: {tickets.tickets.desciption}</h4>
        <h4>Status: {tickets.tickets.status}</h4>
      </div>
    </>
  );
};

export default Ticket;
