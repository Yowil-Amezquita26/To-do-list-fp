import { useAuth0 } from "@auth0/auth0-react";

export const authenticate = async function () {
  const { isAuthenticated, loginWithRedirect, isLoading } = await useAuth0();

  if (isAuthenticated) {
    window.location.origin;
  }
  if (isAuthenticated == false && isLoading == false) {
    loginWithRedirect();
  }
};
