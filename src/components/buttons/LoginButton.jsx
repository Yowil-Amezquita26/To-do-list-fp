import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { registerUser } from '../../hooks/registerUser';

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
    !isAuthenticated &&(
    <button className='MainButtons' onClick={() => (loginWithRedirect(),registerUser())}> 
        Login
    </button>
    )
  );
}

export default LoginButton