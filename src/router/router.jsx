import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import Task from "../pages/taskPage/Task";
import UserPage from "../pages/UserPage";
import { authenticate } from "../services/authenticate";

export default function Rutas() {
  // const { user, isAuthenticated } = useAuth0();
  // const [LogUser, setLogUser] = useState([]);
  // const [isPending, setisPending] = useState(true);
  // const [update, setUpdate] = useState(false);
  // const [error, setError] = useState(null);
  // const storage = window.localStorage;
  // useEffect(() => {
  //   const User = async (url) => {
  //     try {
  //       let res = await fetch(url);
  //       if (!res.ok) {
  //         throw {
  //           err: true,
  //           status: res.status,
  //           statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
  //         };
  //       }
  //       let json = await res.json();
  //       storage.setItem("UserId", json.userDB._id);
  //       storage.setItem("UserEmail", user.email);
  //       storage.setItem("Logedin", true);
  //       setLogUser(json);
  //       setisPending(false);
  //       setError({ err: false });
  //     } catch (err) {
  //       setisPending(true);
  //       setError(err);
  //     }
  //   };

  //   if (isAuthenticated) {
  //     User(`https://to-do-list-be.onrender.com/api/user/${user.email}`);
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<LandingPage />}></Route> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/user-page/:type" element={<UserPage />} />
        <Route path="/task" element={<Task />} />
      </Routes>
    </>
  );
}
