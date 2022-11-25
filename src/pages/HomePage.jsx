import Loading from "../components/loading/Loading";
import CustomNav from "../components/navbar/CustomNav";
import { registerUser } from "../services/registerUser";

const HomePage = () => {
  registerUser("https://to-do-list-be.onrender.com/api/user/register");

  return (
    <>
      <CustomNav />
      <div>HomePage</div>
      <div className="card"></div>
      <Loading />
    </>
  );
};

export default HomePage;
