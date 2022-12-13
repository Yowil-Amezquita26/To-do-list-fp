import React from "react";
import LoginButton from "../buttons/LoginButton";
import LogoutButton from "../buttons/LogoutButton";
import "./CustomNav.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./burguerMenu.css";
import { getUser } from "../../hooks/getUser";
import { useEffect } from "react";
import { useState } from "react";

function toggleBurguerMenu(e) {
  const links = document.getElementById("links");
  const button = document.getElementById("rigthContainer");
  links.classList.toggle("open");
  button.classList.toggle("open");
}

const CustomNav = () => {
  const { user, isAuthenticated } = useAuth0();
  const [LogUser, setLogUser] = useState(null);
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(null);
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
  //       console.log(json.userDB.email);
  //       // storage.setItem("UserId", json.userDB._id);
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
  // }, []);
  // console.log(LogUser);
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

                    <Link
                      to={{
                        pathname: "/user-page/data",
                        state: { stateParam: true },
                      }}
                      className={"MainButtons"}
                    >
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
