import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import Tickets from "../task/Tickets";
import TicketData from "./TicketData";

const Profile = ({ LogUser }) => {
  const { user, isAuthenticated } = useAuth0();

  if (LogUser == null) {
    return <Loading />;
  }
  return (
    <>
      {isAuthenticated && (
        <section className="profile">
          <h2>Profile</h2>
          <img src={`${user.picture}`} alt="" />
          <h3>Name:{LogUser.userDB.name}</h3>
          <h3>Last Name:{LogUser.userDB.last_name}</h3>
          <h3>Email:{LogUser.userDB.email}</h3>
          <h3></h3>
          <label htmlFor="task">
            You have {LogUser.userDB.tickets.length} task
          </label>
          <TicketData tickets={LogUser.userDB.tickets} />
          <img alt="" />
          {LogUser.userDB.tickets
            .filter((ticket) => ticket.status == "Doing")
            .map((tickets, index) => (
              <Tickets
                key={`Doing${index}`}
                tickets={tickets}
              />
            ))}
        </section>
      )}
    </>
  );
};

export default Profile;
