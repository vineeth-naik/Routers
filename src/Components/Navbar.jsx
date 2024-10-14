import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
       <NavLink to='/' >  Home </NavLink>
       <NavLink to='/about' > About </NavLink>
       <NavLink to='/products' > Products </NavLink>
       <NavLink to='/contact' > Contact </NavLink>
       <NavLink to='/login' > Login </NavLink>
       </nav>
    </div>
  )
}

export default Navbar
