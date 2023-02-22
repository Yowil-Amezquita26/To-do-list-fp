import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Task from "../pages/taskPage/Task";
import UserPage from "../pages/UserPage";

export default function Rutas() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route
          exact path="/user-page"
          element={<UserPage />}
        ></Route>
        <Route path="/task" element={<Task />}></Route>
      </Routes>
    </>
  );
}
