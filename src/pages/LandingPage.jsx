import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "../components/buttons/LoginButton";
import CustomNav from "../components/navbar/CustomNav";

function LandingPage() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  return (
    <>
      {isAuthenticated && <CustomNav />}
      <div>LandingPage</div>
      <LoginButton />
    </>
  );
}

export default LandingPage;
