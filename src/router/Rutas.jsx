import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, UserPage, Task } from "../pages";

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
