import React from 'react';
import {FaArrowLeft} from "react-icons/fa";
import './Signup.css';
const Signup = () => {
  return (
    <div className="signup-background">
      <div>
        <div className="signup-form">
          <div>
          <p><span><FaArrowLeft/></span> Go to login</p>
          <p><span><FaArrowLeft/></span> Back to home</p>
          </div>
          <h2>Sign UP</h2>
          <input type="text"  placeholder='Enter your Name'/> 
          <input type="email" placeholder='Enter your Email'/>
          <input type="password" placeholder='Enter Password'/>
          <p>Already have an account?</p>
          <button>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
