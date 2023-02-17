import LoginButton from "../components/buttons/LoginButton";
import Layout from "../components/Layout/Layout";

function LandingPage() {
  return (
    <>
      <Layout site={LandingPage}>
        <section className="landingContent">
          <div>LandingPage</div>
          <LoginButton />
        </section>
      </Layout>
    </>
  );
}

export default LandingPage;
