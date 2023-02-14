import Layout from "../components/Layout";
import Profile from "../components/profile/Profile";
import { authenticate } from "../services/authenticate";

const UserPage = ({ logedin, logUser, setUpdate }) => {
  // setUpdate(true);  
  authenticate();
  return (
    <Layout logedin site={"Profile"}>
      <Profile LogUser={logUser} />
    </Layout>
  );
};

export default UserPage;
