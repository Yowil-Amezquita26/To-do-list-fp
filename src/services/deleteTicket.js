export const deleteTicket = (userId, ticketId, { closeModal}) => {
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
      storage.setItem("deleted", "true");
      closeModal(false);
      // window.location.reload();
    })
    .catch((err) => {
    });
};
