import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(JSON.stringify(user, null, 2));
  console.log(isAuthenticated)
  return (
    isAuthenticated === true ?( 
    <div>
      <h2>Profile</h2>
      Hello{" "}
      {JSON.stringify(user.name, null, 2)}
    </div>
    ):(
        <div>
        <h2>Profile</h2>
        Hello User try to login
      </div>
    )
  );
};

export default Profile;
