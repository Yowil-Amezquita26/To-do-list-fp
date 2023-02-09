const getUserInfo = async function (url) {
  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return "Somenting Happend";
    });
};
