export const editTicket = async function (data, ticketId) {
  const storage = window.localStorage;
  const token = import.meta.env.VITE_REACT_APP_SECRET_TOKEN;
  storage.setItem("edited", "false");
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/edit/${storage.getItem(
      "UserId"
    )}/${ticketId}`,
    {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Secret: token,
      },
      body: JSON.stringify(data),
    }
  )
    .then((response) => response.json())
    .then((data) => {
      storage.setItem("edited", "true");
      return "success";
    })
    .catch((err) => {
      return err;
    });

  return result;
};
