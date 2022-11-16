import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useEffect } from "react";
import CustomNav from "../components/navbar/CustomNav";
import { registerUser } from "../hooks/registerUser";
import { verifyUser } from "../hooks/verifyUser";

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
