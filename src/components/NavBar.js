import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function NavBar() {
  return (
    <nav>
      <div className='navbar'>
        <h5>Icon here</h5>
        <Link to='/'>
          <h5>Home</h5>
        </Link>
        <Link to='/projects'>
          <h5>Projects</h5>
        </Link>
        <Link to='/about'>
          <h5>About</h5>
        </Link>
        <Link to='/contact'>
          <h5>Contact</h5>
        </Link>
      </div>
    </nav>
  );
}
