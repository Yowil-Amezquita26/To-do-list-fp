import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import Loading from "../components/loading/Loading";
import Profile from "../components/profile/Profile";

const UserPage = ({ logedin, logUser, setUpdate}) => {
  // const [LogUser, setLogUser] = useState(null);
  // const {type} =useParams();
  // const location = useLocation()
  // const stateParamVal = location.state.stateParam
  // console.log(stateParamVal);
  setUpdate(true)
  console.log(logedin);
  console.log(logUser);

  return (
    <Layout logedin>
      <Profile LogUser={logUser} />
    </Layout>
  );
};

export default UserPage;
