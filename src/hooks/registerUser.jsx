import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { verifyUser } from "./verifyUser";

export const registerUser = (url) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(
    () => {
      const register = (url) => {
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
            console.log(data);

          })
          .catch((err) => {
            console.log(err);
          });
      };
      register(url)
    },
    [url]
  );

};
