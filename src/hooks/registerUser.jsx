import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const registerUser = (info, verify) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log(verify);

  console.log(isAuthenticated);
  if(isAuthenticated){
    console.log(user)
    fetch("https://to-do-list-be.onrender.com/api/user/register", {
      method: "POST",
      body: {
        "name": `${info.given_name}`,
        "last_name": `${info.family_name}`,
        "email": `${info.email}`,
    }, 
      headers: {
        Accept: "application/json",
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data,"hello");
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

};
