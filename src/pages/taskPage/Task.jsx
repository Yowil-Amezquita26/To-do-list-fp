import React, { useState } from "react";
import "./TaskStyles.css";
import "../../components/loading/loading.css";
import "../../styles/form.css";
import "../../components/task/details/details.css";
import "../../components/task/addTicket/AddTicket.css";
import AddTickets from "../../components/task/addTicket/AddTickets";
import Details from "../../components/task/details/Details";
import Tickets from "../../components/task/Tickets";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import Gallery from "../../components/imageGallery/Gallery";
import { useForm } from "../../form/useForm";
import DropZone from "../../dnd/DropZone";
import { authenticate } from "../../services/authenticate";

export default function Task({ logedin, setUpdate }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [newData, setNewData] = useState(false);
  const [task, setTask] = useState({});
  const [user, setUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);

  const storage = window.localStorage;
  storage.setItem("Logedin", false);

  const {
    form,
    setForm,
    handleInputChange,
    handleOpenWidget,
    updateFormDetails,
  } = useForm();
  let url = `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
    "UserEmail"
  )}`;
  authenticate();
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
        // storage.setItem("UserId", json.userDB._id);
        setUser(json);
        setisPending(false);
        setError({ err: false });
        setUpdate(false);
        setNewData(false);
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
    if (storage.getItem("currentGallery") != "") {
      // user.userDB.tickets.map(ticket =>{
      // })
    }
    if (user != null) {
      user.userDB.tickets.map((ticket) => {
        if (ticket._id == storage.getItem("currentGallery")) {
          setTask(ticket);
        }
      });
    }
  }, [openModal, openDetails, openGallery, newData]);
  // const { user, isPending, error } = getUser(url);
  if (isPending) {
    return (
      <>
        <Layout logedin={false} site={"Task"}></Layout>
      </>
    );
  }
  if (user.messaje == "No User Found") {
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
  }
  return (
    <>
      <Layout logedin site={"Task"}>
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
          <AddTickets
            closeModal={setOpenModal}
            isPending={setisPending}
            setUpdate={setUpdate}
            form={form}
            setForm={setForm}
            handleOpenWidget={handleOpenWidget}
            handleInputChange={handleInputChange}
          />
        )}
        {openDetails && (
          <Details
            closeModal={setOpenDetails}
            ticket={task}
            isPending={setisPending}
          />
        )}
        {openGallery && (
          <Gallery
            ticket={task}
            closeModal={setOpenGallery}
            newData={setNewData}
          />
        )}
        <section className="contentTask">
          <DropZone newData={setNewData}>
            <div key={"not-done"} className="Tickets not-done">
              <h2 className="statusHearder">
                <b>To-do</b>
              </h2>
              {user.userDB.tickets
                .filter((ticket) => ticket.status == "Not Done")
                .map((tickets, index) => (
                  <Tickets
                    key={`notDone${index}`}
                    tickets={tickets}
                    OpenDetails={setOpenDetails}
                    setTask={setTask}
                    OpenGallery={setOpenGallery}
                  />
                ))}
            </div>
          </DropZone>
          <DropZone newData={setNewData}>
            <div key={"doing"} name="doing" className="Tickets doing">
              <h2 className="statusHearder">
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
                    OpenGallery={setOpenGallery}
                  />
                ))}
            </div>
          </DropZone>
          <DropZone newData={setNewData}>
            <div key={"done"} className="Tickets done">
              <h2 className="statusHearder">
                <b>Done</b>
              </h2>
              {user.userDB.tickets
                .filter((ticket) => ticket.status == "Done")
                .map((tickets, index) => (
                  <Tickets
                    key={`Done${index}`}
                    tickets={tickets}
                    OpenDetails={setOpenDetails}
                    OpenGallery={setOpenGallery}
                    setTask={setTask}
                  />
                ))}
            </div>
          </DropZone>
        </section>
      </Layout>
    </>
  );
}
