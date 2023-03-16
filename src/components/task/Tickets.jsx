import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDrag } from "react-dnd";

export const Tickets = ({ tickets, OpenDetails, setTask, OpenGallery })=> {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { from: tickets.status, tickets },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const showImageButton = tickets.images.length;
  return (
    <>
      <div
        key={tickets._id}
        className="CardTicket"
        style={{ visibility: isDragging ? "hidden" : "visible" }}
        ref={drag}
      >
        <h3>Title: {tickets.title}</h3>
        <h4>Description: {tickets.desciption}</h4>
        <div className="taskButtonContainer">
          {showImageButton > 0 && (
            <>
              <button
                className="ticketButton"
                onClick={() => {
                  OpenGallery(true), setTask(tickets);
                }}
              >
                {" "}
                Images
              </button>
            </>
          )}
          {OpenDetails != undefined ? (
            <button
              className="ticketButton"
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
      </div>
    </>
  );
}


