export const deleteImage = async (image, closeModal) => {
  const storage = window.localStorage;
  const images = [];
  await fetch(
    `https://to-do-list-be.onrender.com/api/user/delete-image/${image.public_id}/${image._id}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => closeModal(false));
};
