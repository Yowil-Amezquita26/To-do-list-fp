import React, { useState } from "react";
import "./TaskStyles.css";
import "../../components/loading/loading.css";
import "../../styles/form.css";
import "../../components/task/details/details.css";
import "../../components/task/addTicket/AddTicket.css";
import { getUser } from "../../hooks/getUser";
import AddTickets from "../../components/task/addTicket/AddTickets";
import Details from "../../components/task/details/Details";
import Loading from "../../components/loading/Loading";
import Tickets from "../../components/task/Tickets";
import { useEffect } from "react";

export default function Task() {
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [task, setTask] = useState({});
  const [user, setUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
  const storage = window.localStorage;
  let url = `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
    "UserEmail"
  )}`;
  useEffect(() => {
    const User = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        let json = await res.json();
        console.log(json.userDB.email);
        storage.setItem("UserId", json.userDB._id);
        setUser(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };

    User(
      `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
        "UserEmail"
      )}`
    );
  }, [openModal, openDetails]);

  // const { user, isPending, error } = getUser(url);
  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      {/* <CustomNav /> */}
      <section className="taskHeader">
        <h2>Tasks</h2>
        <button
          className="openModalBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Ticket
        </button>
      </section>
      {openModal && (
        <AddTickets closeModal={setOpenModal} isPending={setisPending} />
      )}
      {openDetails && (
        <Details
          closeModal={setOpenDetails}
          ticket={task}
          isPending={setisPending}
        />
      )}
      <section className="content">
        <div className="Tickets">
          <h2>
            <b>To do</b>
          </h2>
          {user.userDB.tickets
            .filter((ticket) => ticket.status == "Not Done")
            .map((tickets, index) => (
              <Tickets
                key={`notDone${index}`}
                tickets={tickets}
                OpenDetails={setOpenDetails}
                setTask={setTask}
              />
            ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Doing</b>
          </h2>
          {user.userDB.tickets
            .filter((ticket) => ticket.status == "Doing")
            .map((tickets, index) => (
              <Tickets
                key={`Doing${index}`}
                tickets={tickets}
                OpenDetails={setOpenDetails}
                setTask={setTask}
              />
            ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Done</b>
          </h2>
          {user.userDB.tickets
            .filter((ticket) => ticket.status == "Done")
            .map((tickets, index) => (
              <Tickets
                key={`Done${index}`}
                tickets={tickets}
                OpenDetails={setOpenDetails}
                setTask={setTask}
              />
            ))}
        </div>
      </section>
    </>
  );
}
