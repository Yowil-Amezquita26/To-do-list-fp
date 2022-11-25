import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/buttons/LoginButton";
import CustomNav from "../components/navbar/CustomNav";

function LandingPage() {
  const {isAuthenticated} = useAuth0();
  return (
    <>
      {isAuthenticated && <CustomNav />}
      <div>LandingPage</div>
      <LoginButton />
    </>
  );
}

export default LandingPage;
