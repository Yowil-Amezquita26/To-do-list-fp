import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../loading/Loading";
import Tickets from "../task/Tickets";
import TicketData from "./TicketData";
import "./profile.css";

const Profile = ( {LogUser} ) => {
  const { user, isAuthenticated } = useAuth0();
  if (LogUser === null) {
    return <Loading />;
  }
  console.log(LogUser);
  return ( 
    <>
        <>
          <section className="profile">
            <div className="picture">
              <h2>Profile</h2>
              <img src={`${user?.picture}`} alt="" />
            </div>
            <div className="userInfo">
              <h3>Name: {LogUser.name}</h3>
              <h3>Last Name: {LogUser.last_name}</h3>
              <h3>Email: {LogUser.email}</h3>
            </div>
          </section>
          <section className="taskContainer">
            <div className="task">
              <label htmlFor="task">
                You have {LogUser.tickets.length} task
              </label>
              <TicketData tickets={LogUser.tickets} />
              <div className="viewTask">
                {LogUser.tickets
                
                  .filter((ticket) => ticket.status == "Doing")
                  .map((tickets, index) => (
                    <Tickets
                      key={`ProfilePageDoing${index}`}
                      tickets={tickets}
                    />
                  ))}
              </div>
            </div>
          </section>
        </>
      {/* sectetur adipisicing elit. Veniam ex fugiat totam, repellat, dolorem iure exercitationem molestias doloribus illum expedita laudantium quis dignissimos consequatur dolore earum itaque ab quaerat eaque?</h5> */}
    </>
  );
};

export default Profile;
