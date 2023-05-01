import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDrag } from "react-dnd";
import { Card } from "../Card";

export const Tickets = ({ tickets,status, OpenDetails, setTask, OpenGallery }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { from: tickets.status, tickets },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const showImageButton = tickets.images.length;
  console.log(status);
  return (
    <>
      <div className="ticket-card">
        <div className="content-card">
          <div className={`back ${status}`}></div>
          <div className="back-content">
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
        </div>
      </div>
    </>
  );
};
