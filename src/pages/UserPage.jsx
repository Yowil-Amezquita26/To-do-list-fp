import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Loading, Profile } from "../components";
import { getUser } from "../hooks/getUser";
import { authenticate } from "../services";

export const UserPage = () => {
  const { user } = useAuth0();
  authenticate();
  const { logUser, isPending, error } = getUser(
    `https://to-do-list-be.onrender.com/api/user/${user?.email}`
  );

  return (
    <>
      {!isPending ? (
        <Layout site={"Profile"}>
          <Profile LogUser={logUser.userDB} />
        </Layout>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};
