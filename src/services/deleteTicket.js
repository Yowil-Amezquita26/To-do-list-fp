export const deleteTicket = (userId, ticketId) => {
  const storage = window.localStorage;
  storage.setItem("deleted", "false");

  fetch(
    `https://to-do-list-be.onrender.com/api/user/delete/${userId}/${ticketId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data, "hello", "delete", "true");
      storage.setItem("deleted", "true");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err.message);
    });
};
