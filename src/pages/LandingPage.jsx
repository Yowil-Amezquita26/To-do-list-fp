import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/buttons/LoginButton";
import Layout from "../components/Layout";
import CustomNav from "../components/navbar/CustomNav";

function LandingPage({logedin}) {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <Layout logedin>
        <section className="landingContent">
          <div>LandingPage</div>
          <LoginButton />
        </section>
      </Layout>
    </>
  );
}

export default LandingPage;
