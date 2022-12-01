// import React from "react";

function Tickets({ tickets, OpenDetails, setTask }) {
  return (
    <>
      <div key={tickets._id} className="CardTicket">
        <h3>Title: {tickets.title}</h3>
        <h4>Description: {tickets.desciption}</h4>
        <h4>Status: {tickets.status}</h4>
        <button
          onClick={() => {
            OpenDetails(true), setTask(tickets);
          }}
        >
          Details
        </button>
      </div>
    </>
  );
}

export default Tickets;
