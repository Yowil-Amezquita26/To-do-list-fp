import React from 'react'
import LoginButton from '../buttons/LoginButton'
import LogoutButton from '../buttons/LogoutButton'
import './CustomNav.css'
import { Link } from 'react-router-dom'

const CustomNav = () => {
  return (
    <nav className='customNavBar'>
        <h2 className='customNavBar Title'>To-do-list</h2>
        <ul className='UlItems'>
          {<LoginButton/>}
          {<LogoutButton/>}
          <Link to={'/profile'}><button className='MainButtons'>Profile</button></Link>
        </ul>
    </nav>
    
  )
}

export default CustomNav