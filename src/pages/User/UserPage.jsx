import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../components/Layout/Layout";
import Profile from "../../components/profile/Profile";
import { getUser } from "../../hooks/getUser";
import { authenticate } from "../../services/authenticate";

const UserPage = ({ setUpdate }) => {
  // setUpdate(true);
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  console.log(isLoading)

  // authenticate();
  // const { logUser, isPending, error } = getUser(
  //   `https://to-do-list-be.onrender.com/api/user/${user?.email}`
  // );

  return (
    <>
      {!isLoading ? (
        <Layout site={"Profile"}>
          <Profile/>
        </Layout>
      ) : (
        <h4>Cargando</h4>
      )}
    </>
  );
};

export default UserPage;
