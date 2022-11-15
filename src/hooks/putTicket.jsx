import React from 'react'

export const putTicket = (data) => {
    const storage = window.localStorage;
  fetch(`https://to-do-list-be.onrender.com/api/user/${storage.getItem("UserId")}/new-ticket`, {
          method: 'PUT',
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify(data), 
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data,"hello added");
            // Handle data
          })
          .catch((err) => {
            console.log(err.message);
          });
}
