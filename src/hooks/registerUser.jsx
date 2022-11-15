import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
import { verifyUser } from "./verifyUser";

export const registerUser = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  const register =() =>{

    if(isAuthenticated){
      let url =
          `https://to-do-list-be.onrender.com/api/user/verified/${user.email}`;
      
          const { verify, isPending,error} = verifyUser(url);
  
        const data ={
          name: user.given_name,
          last_name: user.family_name,
          email: user.email,
      
        }
      
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
              console.log(data);
              // Handle data
            })
            .catch((err) => {
              console.log(err.message);
            });
    }
  }

  register()

};
