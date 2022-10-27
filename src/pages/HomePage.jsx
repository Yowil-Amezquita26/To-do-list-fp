import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import CustomNav from '../components/navbar/CustomNav';
import LoginButton from '../components/buttons/LoginButton'
import LogoutButton from '../components/buttons/LogoutButton'

const HomePage = () => {
    const { user, isAuthenticated } = useAuth0();
    console.log(user)
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