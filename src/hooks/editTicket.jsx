import React from "react";

export const editTicket = (data,ticketId) => {
  const storage = window.localStorage;
  console.log(JSON.stringify(data));
  console.log(ticketId);
  console.log(storage.getItem("UserId"));
  fetch(
    `https://to-do-list-be.onrender.com/api/user/edit//${ticketId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
            "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "hello");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
