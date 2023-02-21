import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Task from "../pages/taskPage/Task";
import UserPage from "../pages/UserPage";

export default function Rutas() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/user-page/:type"
          element={<UserPage />}
        ></Route>
        <Route path="/task" element={<Task />}></Route>
      </Routes>
    </>
  );
}
