import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const registerUser = (url) => {
  const { user, isAuthenticated } = useAuth0();
  const token = import.meta.VITE_REACT_APP_SECRET_TOKEN
  if (isAuthenticated) {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Secret:token
      },
      body: JSON.stringify({
        name: user.given_name,
        last_name: user.family_name,
        email: user.email,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // storage.setItem("UserEmail", json.userDB.email);
      })
      .catch((err) => {});
  }
};
