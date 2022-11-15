import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { verifyUser } from "../hooks/verifyUser";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);



  
  return (
    <>
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
