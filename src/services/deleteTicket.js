const deleteTicket = async function(userId, ticketId) {
  const storage = window.localStorage;
  storage.setItem("deleted", "false");
  const token = import.meta.VITE_REACT_APP_SECRET_TOKEN
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/delete/${userId}/${ticketId}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Secret:token
      },
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