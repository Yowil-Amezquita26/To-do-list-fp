import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import CustomNav from '../components/navbar/CustomNav';
import { registerUser } from '../hooks/registerUser';
import { verifyUser } from '../hooks/verifyUser';


const HomePage = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
    if(isAuthenticated){
      let url =
      `https://to-do-list-be.onrender.com/api/user/verified/${user.email}`;
  
      const { verify, isPending,error} = verifyUser(url);
      console.log(verify);
      registerUser(user,verify)
    }
  return (
    <>
      <CustomNav/>
      <div>
        HomePage
      </div>
      <div className='card'>        

      </div>
      </>
  )
}

export default HomePage