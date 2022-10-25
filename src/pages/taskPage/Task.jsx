import React from "react";
import CustomNav from "../../components/navbar/CustomNav";
import Ticket from "../../components/task/Ticket";
import "./TaskStyles.css";
import { getUser } from "../../hooks/getUser";


export default function Task() {
  let url =
    "https://to-do-list-be.onrender.com/api/user/6357ef2c4336700984e59d1d";

  const { user, isPending, error } = getUser(url);

  if (isPending) {
    return (
      <h2>
        <b>Loading...</b>
      </h2>
    );
  }
  console.log(user);

  return (
    <>
      <CustomNav />
      <h2>Tasks</h2>
      <div className="Status">
        <div className="Tickets">
          <h2>
            <b>To do</b>
          </h2>
          {user.userDB.ticket[0].not_done.map((tickets) => (
            <Ticket
              key={tickets._id}
              tickets={tickets}
              status={tickets.status}
            />
          ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Doing</b>
          </h2>
          {user.userDB.ticket[0].doing.map((tickets) => (
            <Ticket
              key={tickets._id}
              tickets={tickets}
              status={tickets.status}
            />
          ))}
        </div>
        <div className="Tickets">
          <h2>
            <b>Done</b>
          </h2>
          {user.userDB.ticket[0].done.map((tickets) => (
            <Ticket
              key={tickets._id}
              tickets={tickets}
              status={tickets.status}
            />
          ))}
        </div>
      </div>
    </>
  );
}
