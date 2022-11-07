import React from "react";
import CustomNav from "../../components/navbar/CustomNav";
import Ticket from "../../components/task/Ticket";
import "./TaskStyles.css";
import { getUser } from "../../hooks/getUser";
import { useAuth0 } from "@auth0/auth0-react";


export default function Task() {
  const storage = window.localStorage;
  console.log(storage.getItem("UserEmail"));
  let url =
    `https://to-do-list-be.onrender.com/api/user/${storage.getItem("UserEmail")}`;

  const { user, isPending, error } = getUser(url);

  if (isPending) {
    return (
      <h2>
        <b>Loading...</b>
      </h2>
    );
  }
  
 
  return (
    <>
      <CustomNav />
      <h2>Tasks</h2>
      <div className="Status">
        <div className="Tickets">
          <h2>
            <b>To do</b>
          </h2>
          {user.userDB.ticket.not_done.map((tickets) => (
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
          {user.userDB.ticket.doing.map((tickets) => (
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
          {user.userDB.ticket.done.map((tickets) => (
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
