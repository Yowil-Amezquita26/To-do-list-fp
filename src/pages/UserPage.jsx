import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Loading from "../components/loading/Loading";
import Profile from "../components/profile/Profile";
import { authenticate } from "../services/authenticate";

const UserPage = ({ logedin, logUser, setUpdate }) => {
  // const [LogUser, setLogUser] = useState(null);
  // const {type} =useParams();
  // const location = useLocation()
  // const stateParamVal = location.state.stateParam
  setUpdate(true);
  authenticate();
  return (
    <Layout logedin site={"Profile"}>
      <Profile LogUser={logUser} />
    </Layout>
  );
};

export default UserPage;
