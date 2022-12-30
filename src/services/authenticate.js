import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const authenticate = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (isAuthenticated == false) {
    navigate("/home");
  }
};
