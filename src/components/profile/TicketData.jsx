import React from "react";

export const TicketData = (tickets) => {
  const notDone = tickets.tickets.filter(
    (ticket) => ticket.status == "Not Done"
  );
  const Doing = tickets.tickets.filter((ticket) => ticket.status == "Doing");
  const Done = tickets.tickets.filter((ticket) => ticket.status == "Done");
  return (
    <>
      <ul>
        <li>{notDone.length} Not Done</li>
        <li>{Doing.length} Doing</li>
        <li>{Done.length} Done</li>
      </ul>
    </>
  );
};
