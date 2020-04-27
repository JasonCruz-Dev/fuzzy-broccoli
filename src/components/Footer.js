import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

import fb from "./";

export default function Footer() {
  return (
    <nav>
      <div className='navbar'>
        <h5>Connect with me</h5>
        <Link to='/'>
          <i class='fab fa-facebook'></i>
          <h5>Careers</h5>
        </Link>
        <Link to='/projects'>
          <h5>Blog</h5>
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
