import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export const registerUser = (info,verify) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log(verify);
  const [register, setRegister] = useState({
    _id: info.sub,
    name: info.given_name,
    last_name: info.family_name,
    password: null,
    email: info.email,
    ticket: {
      not_done: [
        {
          title: `hello ${info.given_name}`,
          desciption: "Make your first ticket",
          status: "not done",
        },
      ],

      doing: [
        {
          title: null,
          desciption: null,
          status: null,
        },
      ],
      done: [
        {
          title: null,
          desciption: null,
          status: null,
        },
      ],
    },
  });
    console.log(register)
    // fetch('https://to-do-list-be.onrender.com/api/user/register', {
    //   method: 'POST',
    //   body: JSON.stringify({
        
    //     register
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    // })
    //    .then((response) => response.json())
    //    .then((data) => {
    //       console.log(data);
    //       // Handle data
    //    })
    //    .catch((err) => {
    //       console.log(err.message);
    //    });

  return { register };
};
