import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout} = useAuth0();
  const storage = window.localStorage;
  return (
      <button
        className="MainButtons"
        onClick={() => {
          storage.clear,
          storage.setItem("isLogedin", "false"), 
          logout();
        }}
      >
        Logout
      </button>
    )
};

export default LogoutButton;
