import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

export const registerUser = (url) => {
  const { user, isAuthenticated } = useAuth0();
  const storage = window.localStorage;
  if (isAuthenticated) {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
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
