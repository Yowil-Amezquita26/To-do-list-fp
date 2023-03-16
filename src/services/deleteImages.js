export const deleteImages = async (ticket) => {
  const images = [];
  const token = import.meta.env.VITE_REACT_APP_SECRET_TOKEN;
  ticket.images.map((image) => {
    if(image.public_id!=""){
      images.push(image);
      fetch(
        `https://to-do-list-be.onrender.com/api/user/delete-image/${image.public_id}/${image._id}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Secret: token,
          },
        }
      );
    }
  });
};
