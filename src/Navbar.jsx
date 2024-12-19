import React from 'react'
import { NavLink } from 'react-router-dom'
import bookLogo from "./assets/4851710.jpg";
function Navbar() {
   
  return (
    <div className='nav'>
         <img src={bookLogo} alt="Book Logo" style={{ width: "200px", height: "auto" }} />
        <ul>
         <NavLink to='/'><li>Home</li></NavLink>   
            <NavLink to='/book'><li>Book List</li></NavLink>
            <NavLink to='/detail'><li> Book Detail</li></NavLink>   
            <NavLink to='/profile'><li>User Profile</li></NavLink>
            <NavLink to='/admin'><li>Admin Dashboard</li></NavLink>
        </ul>
        <button>SignIn</button>
        <button>LogIn</button>
        
    </div>
  )
}

export default Navbar