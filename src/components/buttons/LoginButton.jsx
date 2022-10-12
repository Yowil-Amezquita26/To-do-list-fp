import React, { Component } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LoginButton = () => {
    const {loginWithRedirect, isAuthenticated} = useAuth0()
  return (
    !isAuthenticated &&(
    <button className='MainButtons' onClick={() => loginWithRedirect()}> 
        Login
    </button>
    )
  );
}

export default LoginButton