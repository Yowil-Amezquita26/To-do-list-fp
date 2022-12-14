import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    !isAuthenticated && (
      <button
        className="MainButtons"
        onClick={() => (loginWithRedirect(), navigate("/home"))}
      >
        Login
      </button>
    )
  );
};

export default LoginButton;
