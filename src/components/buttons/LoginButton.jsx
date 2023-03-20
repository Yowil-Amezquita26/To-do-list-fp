import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const storage = window.localStorage;

  return (
    <button
      className="MainButtons"
      onClick={() => (
        loginWithRedirect(),
        navigate("/home"),
        storage.setItem("isLogedin", true)
      )}
    >
      Login
    </button>
  );
};

export default LoginButton;
