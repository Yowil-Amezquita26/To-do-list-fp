const deleteTicket = async function(userId, ticketId) {
  const storage = window.localStorage;
  storage.setItem("deleted", "false");

  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/delete/${userId}/${ticketId}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      storage.setItem("deleted", "true");
      return "success"
      // window.location.reload();
    })
    .catch((err) => {
      return err
    });
    return result
};

export default deleteTicket