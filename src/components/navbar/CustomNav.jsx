import React from "react";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import "./CustomNav.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./burguerMenu.css";

function toggleBurguerMenu(e) {
  console.log(e);
  console.log(e.target.checked);
  const links = document.getElementById("links");
  const button = document.getElementById("rigthContainer");
  links.classList.toggle("open");
  button.classList.toggle("open");
}

const CustomNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <section className="customNavBar">
        <div className="titleContainer">
          <h2 className="Title">To-do-list</h2>
        </div>
        {isAuthenticated && (
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
                  <ul className="navButtonContainer">
                    <Link to={"/home"} className={"MainButtons"}>
                      <button>Home</button>
                    </Link>

                    <Link to={"/user-page"} className={"MainButtons"}>
                      <button>Profile</button>
                    </Link>
                    <Link to={"/task"} className={"MainButtons"}>
                      <button>Task</button>
                    </Link>
                    <LoginButton />
                    <LogoutButton />
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default CustomNav;
