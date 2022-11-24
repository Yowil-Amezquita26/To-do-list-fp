import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Task from "./pages/taskPage/Task";
import "./components/task/AddTicket.css";
import LandingPage from "./pages/LandingPage";

export default function Routes() {

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/user-page" element={<UserPage />}></Route>
          <Route path="/task" element={<Task />}></Route>
        </Routes>
      </Router>
    </div>
  );
}


