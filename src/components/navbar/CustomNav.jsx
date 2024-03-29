import React from "react";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import "./CustomNav.css";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./burguerMenu.css";

function toggleBurguerMenu(e) {
  const links = document.getElementById("links");
  const button = document.getElementById("rigthContainer");
  links.classList.toggle("open");
  button.classList.toggle("open");
}

const CustomNav = () => {
  const { isAuthenticated } = useAuth0();
  const storage = window.localStorage;
  return (
    <>
      <section className="customNavBar">
        <div className="titleContainer">
          <h2>To-do-list</h2>
        </div>
        <>
          <div className="rigthContainer" id="rigthContainer">
            <label htmlFor="menuCheck" className="bar ">
              <input
                id="menuCheck"
                type="checkbox"
                className="burguerButton"
                onClick={toggleBurguerMenu}
              />

              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </label>
            <div id="links" className="links">
              <div className="navLinks">
                <Link to={"/"} className={"MainButtons"}>
                  <button>Home</button>
                </Link>

                {isAuthenticated && (
                  <>
                    <Link to={"/user-page"} className={"MainButtons"}>
                      <button>Profile</button>
                    </Link>
                    <Link to={"/task"} className={"MainButtons"}>
                      <button>Task</button>
                    </Link>
                  </>
                )}
                {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
              </div>
            </div>
          </div>
        </>
      </section>
    </>
  );
};

export default CustomNav;
