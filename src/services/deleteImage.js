export const deleteImage = async function (currentImg) {
  const token = import.meta.env.VITE_REACT_APP_SECRET_TOKEN;
  console.log(currentImg);
  let result = await fetch(

    `https://to-do-list-be.onrender.com/api/user/delete-image/${currentImg.public_id}/${currentImg._id}`,
    {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Secret: token,
      },
    }
  )
    .then((response) => response.json())
    .then(() => {
      return "success";
    })
    .catch((error) => {
      return error;
    });
  return result;
};

