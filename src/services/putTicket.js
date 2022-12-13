export const putTicket = (data, { closeModal }, { isPending }, {setUpdate}) => {
  const storage = window.localStorage;
  storage.setItem("added", false);
  fetch(
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
      storage.setItem("added", true);
      closeModal(false);
      isPending(true);
      setUpdate(true)
      // window.location.reload();
      // Handle data
    })
    .catch((err) => {
      console.log(err.message);
    });
};
