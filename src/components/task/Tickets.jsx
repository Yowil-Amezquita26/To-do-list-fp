import React from "react";
import { useNavigate, Link } from "react-router-dom";
function Tickets({ tickets, OpenDetails, setTask }) {
  console.log(OpenDetails);
  const navigate = useNavigate;
  return (
    <>
      <div key={tickets._id} className="CardTicket">
        <h3>Title: {tickets.title}</h3>
        <h4>Description: {tickets.desciption}</h4>
        {OpenDetails != undefined ? (
          <button
            onClick={() => {
              OpenDetails(true), setTask(tickets);
            }}
          >
            Details
          </button>
        ) : (
          <Link to={"/task"} className={"MainButtons"}>
            <button>Task</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Tickets;
