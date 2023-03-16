export const putTicket = async function (data) {
  const storage = window.localStorage;
  const token = import.meta.env.VITE_REACT_APP_SECRET_TOKEN;
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
      "UserId"
    )}/new-ticket`,
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
      return "success";
    })
    .catch((err) => {
      return err.messaje;
    });
  return result;
};


