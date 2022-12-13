import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LandingPage from "../pages/LandingPage";
import Task from "../pages/taskPage/Task";
import UserPage from "../pages/UserPage";

export default function Rutas() {
  const { user, isAuthenticated } = useAuth0();
  const [LogUser, setLogUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [update, setUpdate] = useState(false)
  const [error, setError] = useState(null);
  useEffect(() => {
    const User = async (url) => {
      try {
        let res = await fetch(url);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };
        }
        let json = await res.json();
        console.log(json.userDB.email);
        // storage.setItem("UserId", json.userDB._id);
        setLogUser(json);
        setisPending(false);
        setError({ err: false });
      } catch (err) {
        setisPending(true);
        setError(err);
      }
    };
    if(isAuthenticated){
      User(
        `https://to-do-list-be.onrender.com/api/user/${user.email}`
      );

    }
  }, [isAuthenticated, update ]);
  console.log(LogUser);
  console.log(isPending)
  console.log("first")
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage logedin={isAuthenticated}  />}></Route>
        <Route path="/home" element={<HomePage logedin={isAuthenticated} />}></Route>
        <Route path="/user-page/:type" element={<UserPage logedin={isPending} logUser={LogUser} setUpdate={setUpdate} />}></Route>
        <Route path="/task" element={<Task logedin={isAuthenticated} setUpdate={setUpdate} />}></Route>
      </Routes>
    </>
  );
}
