import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/profile/Profile";
import { getUser } from "../../hooks/getUser";
import { authenticate } from "../../services/authenticate";

const UserPage = ({ setUpdate }) => {
  // setUpdate(true);
  const { user, isAuthenticated, isLoading, error } = useAuth0();
  console.log(isAuthenticated);
  console.log(isLoading);

  // authenticate();
  // const { logUser, isPending, error } = getUser(
  //   `https://to-do-list-be.onrender.com/api/user/${user?.email}`
  // );
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <Layout site={"Profile"}>
        <div className="picture">
          <h2>Profile</h2>
          <img src={`${user?.picture}`} alt="" />
        </div>
        {/* <Profile /> */}
      </Layout>
    );
  } else {
    return (
      <Layout site={"Profile"}>
        <div className="picture">
          <h2>Profile</h2>
          <img src={`${user?.picture}`} alt="" />
        </div>
        {/* <Profile /> */}
      </Layout>
    );
  }

  // return (
  //   isAuthenticated && (
  //     <Layout site={"Profile"}>
  //       <div className="picture">
  //         <h2>Profile</h2>
  //         <img src={`${user?.picture}`} alt="" />
  //       </div>
  //       {/* <Profile /> */}
  //     </Layout>
  //   )
  // );
};

export default UserPage;
