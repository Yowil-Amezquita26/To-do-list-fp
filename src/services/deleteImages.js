export const deleteImages = (ticket) => {
  const storage = window.localStorage;
  const images = [];
  ticket.images.map((image) => {
    images.push(image.public_id);
    console.log(image.public_id);
    fetch(
      `https://to-do-list-be.onrender.com/api/user/delete-image/${image.public_id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  console.log(images);

};
