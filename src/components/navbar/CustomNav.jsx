import React from "react";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import "./CustomNav.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const UserLoged = () => {};

const CustomNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <nav className="customNavBar">
      <h2 className="customNavBar Title">To-do-list</h2>
      <ul className="UlItems">
        <Link to={"/home"} className={"MainButtons"}>
          <button>Home</button>
        </Link>
        {isAuthenticated && (
          <div className="UlItems">
            <Link to={"/user-page"} className={"MainButtons"}>
              <button>Profile</button>
            </Link>
            <Link to={"/task"} className={"MainButtons"}>
              <button>Task</button>
            </Link>
          </div>
        )}

        <LoginButton />
        <LogoutButton />
      </ul>
    </nav>
  );
};

export default CustomNav;
