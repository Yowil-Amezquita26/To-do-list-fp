import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <section className="profile">
          <h2>Profile</h2>
          <h3>Hello {user.name}</h3>
          <img src={user.picture} alt="" />
        </section>
      )}
    </>
  );
};

export default Profile;
