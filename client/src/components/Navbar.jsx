import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <Link to={"/"} className="nav-title">MeetNow</Link>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
            <Link to={"/"}>Home</Link>
            <Link>Products</Link>
            <Link to={"/signup"}>Signup</Link>
            <Link to={"/login"}>Login</Link>
            <Link>JsFiddle</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
