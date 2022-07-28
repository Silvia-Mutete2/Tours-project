import React from "react";
import { Link } from "react-router-dom";
import '../App.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-heading">
        <h1>
          <span>
            ALIS-Tours
          </span>
        </h1>
      </div>
      <div className="navbar-links">
        <ul>
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        
          <Link to="/login">
          {" "}
          <li>Login</li>
        </Link>
          <Link to="/signup">
          {" "}
          <li>SignUp</li>
        </Link>
        <Link to="/comments">
          {" "}
          <li>Comments</li>
        </Link>
        </ul>
      </div>
      <button className="about-btn">LogOut</button>
    </div>
  );
};

export default Navbar;