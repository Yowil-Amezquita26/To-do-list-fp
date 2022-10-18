import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import CustomNav from "./navbar/CustomNav";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <>
    <CustomNav/>
    {isAuthenticated === true ?( 
    <div>
      <h2>Profile</h2>
      <h3>Hello {user.name}</h3>
      <img src={user.picture} alt="" />
    </div>
    ):(
        <div>
        <h2>Profile</h2>
        Hello User try to login
      </div>
    )}
    </>
  );
};

export default Profile;
