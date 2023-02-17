import React, { useEffect } from "react";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import "./CustomNav.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./burguerMenu.css";

{
  /* <label htmlFor="menuCheck" className="bar ">
            <input
              id="menuCheck"
              type="checkbox"
              className="burguerButton"
              onClick={toggleBurguerMenu}
            />
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </label> */
}

function toggleBurguerMenu(e) {
  const links = document.getElementById("links");
  const button = document.getElementById("rigthContainer");
  links.classList.toggle("open");
  button.classList.toggle("open");
}

const CustomNav = () => {
  // const storage = window.localStorage;
  let showButtons = localStorage.getItem("isLogedin");
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     console.log(user);
  //     localStorage.setItem("emailAuth0", user?.email);
  //     localStorage.setItem("isLogedin", true);
  //   }
  // }, []);

  return (
    <section className="customNavBar">
      <div className="titleContainer">
        <h2 className="Title">To-do-list</h2>
      </div>
      <nav className="navLinks">
        {/* Los ul son para listas no para navBars */}
        {/* <ul className="navButtonContainer">  */}
        <Link to={"/"} className="MainButtons">
          Home
        </Link>
        {isAuthenticated ? (
          <>
            <Link
              to={{
                pathname: "/user-page/data",
                state: { stateParam: true },
              }}
              className="MainButtons"
            >
              Profile
            </Link>
            <Link to="/task" className="MainButtons">
              Task
            </Link>
            <button
              className="MainButtons"
              onClick={() => {
                localStorage.clear(),
                  localStorage.setItem("isLogedin", false),
                  logout();
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              className="MainButtons"
              onClick={() => {
                loginWithRedirect();
                localStorage.setItem("emailAuth0", user?.email);
                localStorage.setItem("isLogedin", true);
                // navigate("/");
              }}
            >
              Login
            </button>
          </>
        )}
        {/* </ul> */}
      </nav>
    </section>
  );
};

export default CustomNav;
