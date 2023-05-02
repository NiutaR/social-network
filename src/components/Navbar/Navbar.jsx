import React from "react";
import { NavLink } from "react-router-dom";
import styleNavbar from './Navbar.module.css';


const Navbar = () => {
  return (
    <nav className={styleNavbar.nav}>
      <div className={styleNavbar.item}>
       <NavLink to='/profile' >Profile</NavLink></div>
      <div className={styleNavbar.item} ><NavLink to='/dialogs'>Messages</NavLink></div>
      <div className={styleNavbar.item}><NavLink to='/users'>Users</NavLink></div>
      <div className={styleNavbar.item}><NavLink to='/settings'>Settings</NavLink></div>
      
    </nav>
  );
}

export default Navbar;