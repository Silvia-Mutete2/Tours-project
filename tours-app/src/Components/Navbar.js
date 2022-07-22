import React from "react";
import logo from "../logo.png"


function Navbar(){
    return (
        <nav className="navbar">
        <img src={logo} alt="city tours logo" />
        <ul className="nav-links">
          <li>
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="/" className="nav-link active">
              Contacts
            </a>
          </li>
        </ul>
      </nav>
    );
    
}

export default Navbar