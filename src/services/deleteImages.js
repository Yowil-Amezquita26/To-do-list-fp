export const deleteImages = async (ticket) => {
  const images = [];
  const token = import.meta.VITE_REACT_APP_SECRET_TOKEN
  ticket.images.map((image) => {
    images.push(image.public_id);
    fetch(
      `https://to-do-list-be.onrender.com/api/user/delete-image/${image.public_id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          Secret:token
        },
      }
    );
  });
};
