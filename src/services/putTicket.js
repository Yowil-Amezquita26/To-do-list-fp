const putTicket = async function (data) {
  const storage = window.localStorage;
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/${storage.getItem(
      "UserId"
    )}/new-ticket`,
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
      // storage.setItem("added", true);
      return "success"
      // Handle data
    })
    .catch((err) => {
      return err.messaje
    });
    return result
};

export default putTicket