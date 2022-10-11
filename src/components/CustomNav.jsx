import React from 'react'
import LoginButton from './LoginButton'

const CustomNav = () => {
  return (
    <nav className='customNavBar'>
        <h2 className='titleInNavBar'>To-do-list</h2>
        <LoginButton/>
    </nav>
  )
}

export default CustomNav