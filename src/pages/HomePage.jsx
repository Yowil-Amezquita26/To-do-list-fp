import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import CustomNav from "../components/navbar/CustomNav";
import { verifyUser } from "../hooks/verifyUser";
import { registerUser } from "../services/registerUser";

const HomePage = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  registerUser("https://to-do-list-be.onrender.com/api/user/register");

  return (
    <>
      <CustomNav />
      <div>HomePage</div>
      <div className="card"></div>
    </>
  );
};

export default HomePage;
