export const deleteImages = async (ticket) => {
  const images = [];
  ticket.images.map((image) => {
    images.push(image.public_id);
    fetch(
      `https://to-do-list-be.onrender.com/api/user/delete-image/${image.public_id}`,
      {
        method: "DELETE",
      }
    );
  });
};
