export const editTicket = (data, ticketId, { closeModal, isPending }) => {
  const storage = window.localStorage;
  storage.setItem("edited", "false");

  fetch(
    `https://to-do-list-be.onrender.com/api/user/edit/${storage.getItem(
      "UserId"
    )}/${ticketId}`,
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
      storage.setItem("edited", "true");
      closeModal(false);

      isPending(true);
      // window.location.reload();
    })
    .catch((err) => {
    });
};
