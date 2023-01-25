import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDrag } from "react-dnd";

function Tickets({ tickets, OpenDetails, setTask, OpenGallery }) {
  const navigate = useNavigate;
  const images = tickets.images;
  const [{isDragging}, drag] = useDrag(()=>({
    type:"card",
    item: {from:tickets.status, tickets},
    collect: (monitor) =>({
      isDragging : !!monitor.isDragging(),
    })
  }))
  const showImageButton = tickets.images.length
  return (
    <>
      <div key={tickets._id} className="CardTicket"  style={{visibility:isDragging ? "hidden":"visible"}} ref={drag}>
        <h3>Title: {tickets.title}</h3>
        <h4>Description: {tickets.desciption}</h4>

        {showImageButton > 0 && (
          <>
            <button
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
