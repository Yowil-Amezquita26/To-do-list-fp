import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const storage = window.localStorage;
  return (
    storage.getItem("isLogedin") && (
      <button
        className="MainButtons"
        onClick={() => {
          storage.clear,
          storage.setItem("Logedin", false), 
          logout();
        }}
      >
        Logout
      </button>
    )
  );
};

export default LogoutButton;
