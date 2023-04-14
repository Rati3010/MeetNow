import React from 'react';
import {FaArrowLeft} from "react-icons/fa";
import './Signup.css';

const Login = () => {
  return (
    <div className="signup-background login-background">
      <div>
        <div className="signup-form">
          <div>
            <p>
              <span>
                <FaArrowLeft />
              </span>{' '}
              Go to Sign in
            </p>
            <p>
              <span>
                <FaArrowLeft />
              </span>{' '}
              Back to home
            </p>
          </div>
          <h2>LOG IN</h2>
          <input type="email" placeholder="Enter your Email" />
          <input type="password" placeholder="Enter Password" />
          <p>Don't have an account?</p>
          <button>Log IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
