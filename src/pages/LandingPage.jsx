import LoginButton from "../components/buttons/LoginButton";
import Layout from "../components/Layout";

function LandingPage({ logedin }) {
  return (
    <>
      <Layout logedin site={LandingPage}>
        <section className="landingContent">
          <div>LandingPage</div>
          <LoginButton />
        </section>
      </Layout>
    </>
  );
}

export default LandingPage;
