import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div className='nav-header'>
        <ul className='nav-menu'>
          <li>
            <Link className='navbar' to="/">Home</Link>
          </li>
          <li>
            <Link className='navbar' to="/profile">Profile</Link>
          </li>
          <li>
            <Link className='navbar' to="/login">Log out <ion-icon name="log-out-outline"></ion-icon></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
