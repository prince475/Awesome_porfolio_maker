import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <div>
        <Link className='navbar' to="/">Home</Link>
        <Link className='navbar' to="/skill">Skills</Link>
        <Link className='navbar' to="/login">Log out</Link>
      </div>
    </nav>
  )
}

export default Navbar
