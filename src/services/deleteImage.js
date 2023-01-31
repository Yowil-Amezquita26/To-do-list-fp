const deleteImage = async function (currentImg, newData) {
  const token = import.meta.VITE_REACT_APP_SECRET_TOKEN
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/delete-image/${currentImg.public_id}/${currentImg._id}`,
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
      return "success";
      // window.location.reload();
    })
    .catch((error) => {
      return error;
    });
  return result;
};

export default deleteImage;
