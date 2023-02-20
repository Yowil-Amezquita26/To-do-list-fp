import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const authenticate = async function(){
  const storage = window.localStorage;
  const { isAuthenticated,loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    window.location.href
  } else {
    storage.setItem("isLogedin", true)
    loginWithRedirect()
  }
};

export default authenticate
