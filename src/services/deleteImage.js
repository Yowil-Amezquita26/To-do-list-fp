const deleteImage = async function (currentImg, newData) {
  let result = await fetch(
    `https://to-do-list-be.onrender.com/api/user/delete-image/${currentImg.public_id}/${currentImg._id}`,
    {
      method: "DELETE",
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
