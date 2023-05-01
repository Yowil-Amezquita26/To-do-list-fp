import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import {
  AddTickets,
  Details,
  Tickets,
  Gallery,
  Layout,
  Loading,
  Card,
} from "../../components";

import { useForm } from "../../form/useForm";
import DropZone from "../../dnd/DropZone";

import { getUser } from "../../hooks/getUser";
import { authenticate } from "../../services";
import "../../styles/modal.css";
import "./TaskStyles.css";
import "../../styles/form.css";
import "../../components/task/details/details.css";
import "../../components/task/addTicket/AddTicket.css";

export const Task = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [openGallery, setOpenGallery] = useState(false);
  const [newData, setNewData] = useState(false);
  const [task, setTask] = useState([]);
  const { user } = useAuth0();
  const { logUser, isPending, error, tasks, setRefresh } = getUser(
    `https://to-do-list-be.onrender.com/api/user/${user?.email}`
  );
  const {
    form,
    setForm,
    handleInputChange,
    handleOpenWidget,
    updateFormDetails,
  } = useForm();
  authenticate();
  if (isPending) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (logUser?.messaje == "No User Found") {
    return (
      <>
        <h1>No Data Found</h1>
      </>
    );
  }
  return (
    <>
      <Layout site={"Task"}>
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
            refresh={setRefresh}
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
            refresh={setRefresh}
          />
        )}
        {openGallery && (
          <Gallery
            ticket={task}
            closeModal={setOpenGallery}
            newData={setNewData}
            refresh={setRefresh}
          />
        )}
        <section className="contentTask">
          <DropZone refresh={setRefresh}>
            <div key={"not-done"} className="Tickets ">
              <h2 className="statusHearder">
                <b>To-do</b>
              </h2>
              {tasks
                .filter((ticket) => ticket.status == "Not Done")
                .map((tickets, index) => (
                  <Tickets
                    key={`notDone${index}`}
                    tickets={tickets}
                    status={"not-done"}
                    OpenDetails={setOpenDetails}
                    setTask={setTask}
                    OpenGallery={setOpenGallery}
                  />
                ))}
            </div>
          </DropZone>
          <DropZone refresh={setRefresh}>
            <div key={"doing"} name="doing" className="Tickets ">
              <h2 className="statusHearder">
                <b>Doing</b>
              </h2>
              {tasks
                .filter((ticket) => ticket.status == "Doing")
                .map((tickets, index) => (
                  <Tickets
                    key={`Doing${index}`}
                    tickets={tickets}
                    status={"doing"}
                    OpenDetails={setOpenDetails}
                    setTask={setTask}
                    OpenGallery={setOpenGallery}
                  />
                ))}
            </div>
          </DropZone>
          <DropZone refresh={setRefresh}>
            <div key={"done"} className="Tickets ">
              <h2 className="statusHearder">
                <b>Done</b>
              </h2>
              {tasks
                .filter((ticket) => ticket.status == "Done")
                .map((tickets, index) => (
                  <>
                  <Tickets
                    key={`Done${index}`}
                    tickets={tickets}
                    status={"done"}
                    OpenDetails={setOpenDetails}
                    OpenGallery={setOpenGallery}
                    setTask={setTask}
                  />
                  </>
                ))}
            </div>
          </DropZone>
        </section>
      </Layout>
    </>
  );
};
