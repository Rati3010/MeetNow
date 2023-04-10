import React from "react";
import logo from "../assets/logo.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">MeetNow</div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
            <a>Home</a>
            <a>Products</a>
            <a>Signup</a>
            <a>Login</a>
            <a>JsFiddle</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
