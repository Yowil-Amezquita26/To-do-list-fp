import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const registerUser = (info, verify) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const data ={
    name: info.given_name,
    last_name: info.family_name,
    email: info.email,

  }

  console.log(isAuthenticated);
  if(isAuthenticated || verify == "Not registered"){
    fetch("https://to-do-list-be.onrender.com/api/user/register", {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify(data), 
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data,"hello");
        // Handle data
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(user)
  }

};
