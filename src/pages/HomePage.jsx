import Layout from "../components/Layout";
import Loading from "../components/loading/Loading";
import CustomNav from "../components/navbar/CustomNav";
import reactLogo from "../assets/react.svg";
import { registerUser } from "../services/registerUser";
import { useState } from "react";

const HomePage = ({ logedin }) => {
  const [register, setRegister] = useState(false);
  registerUser("https://to-do-list-be.onrender.com/api/user/register", {
    setRegister,
  });

  return (
    <>
      <Layout logedin>
        <section>
          <article className="content">
            <h1>HomePage</h1>
            <h2>About Me</h2>
            <p className="description">
              My Name is Yowil Amezquita ,I graduated has a software developer.
              I'm a person who likes to try new things, i like to learn and know
              new skills in other to grow has a profesional and a person.{" "}
            </p>
            <h2>About the app</h2>
            <p className="description">
              This app was created has a task manager, where a user can save his
              task and update them depending on the status of said task, using
              the knowledge i had and learn about javascript, css and html.
              Combined with react and vite.{" "}
            </p>
            <div className="imageContainer">
              <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" className="logo" alt="Vite logo" />
              </a>
              <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
          </article>
        </section>
      </Layout>
    </>
  );
};

export default HomePage;
