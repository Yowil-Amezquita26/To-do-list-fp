import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const authenticate = async function(){
  const storage = window.localStorage;
  const { isAuthenticated,loginWithRedirect, isLoading } = await useAuth0();
  const path =window.location.origin
  console.log(isLoading,"Loading");
  console.log(isAuthenticated);
  console.log(path);
  console.log(window.location.path);

  if (isAuthenticated) {
    window.location.origin
  }
  if(isAuthenticated == false && isLoading == false) {
    // storage.setItem("isLogedin", true)
    loginWithRedirect()
  }
};

export default authenticate
