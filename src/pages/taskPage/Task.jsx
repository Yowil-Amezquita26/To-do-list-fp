import React, { useState } from "react";
import CustomNav from "../../components/navbar/CustomNav";
import "./TaskStyles.css";
import { getUser } from "../../hooks/getUser";
import AddTickets from "../../components/task/AddTickets";
import Details from "../../components/task/Details";

export default function Task() {
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [task, setTask] = useState({});
  const storage = window.localStorage;
  let taskNotDone = {};
  let taskDoing = {};
  let taskDone = {};

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

  taskNotDone = user.userDB.tickets.filter(
    (ticket) => ticket.status == "Not Done"
  );
  taskDoing = user.userDB.tickets.filter((ticket) => ticket.status == "Doing");
  taskDone = user.userDB.tickets.filter((ticket) => ticket.status == "Done");

  return (
    <main>
      <CustomNav />
      <main className="mainContent">
        <h2>Tasks</h2>
        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Ticket
        </button>
        {openModal && <AddTickets closeModal={setOpenModal} />}
        {openDetails && <Details closeModal={setOpenDetails} ticket={task} />}
        <section className="content">
          <div className="Tickets">
            <h2>
              <b>To do</b>
            </h2>
            {/* <button onClick={}></button> */}
            {user.userDB.tickets
              .filter((ticket) => ticket.status == "Not Done")
              .map((tickets) => (
                <div key={tickets._id} className="CardTicket">
                  <h3>Title: {tickets.title}</h3>
                  <h4>Description: {tickets.desciption}</h4>
                  <h4>Status: {tickets.status}</h4>
                  <button
                    onClick={() => {
                      setOpenDetails(true), setTask(tickets);
                    }}
                  >
                    Details
                  </button>
                </div>
              ))}
          </div>
          <div className="Tickets">
            <h2>
              <b>Doing</b>
            </h2>
            {taskDoing.map((tickets) => (
              <div key={tickets._id} className="CardTicket">
                <h3>Title: {tickets.title}</h3>
                <h4>Description: {tickets.desciption}</h4>
                <h4>Status: {tickets.status}</h4>
                <button
                  onClick={() => {
                    setOpenDetails(true), setTask(tickets);
                  }}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
          <div className="Tickets">
            <h2>
              <b>Done</b>
            </h2>
            {taskDone.map((tickets) => (
              <div key={tickets._id} className="CardTicket">
                <h3>Title: {tickets.title}</h3>
                <h4>Description: {tickets.desciption}</h4>
                <h4>Status: {tickets.status}</h4>
                <button
                  onClick={() => {
                    setOpenDetails(true), setTask(tickets);
                  }}
                >
                  Details
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </main>
  );
}
