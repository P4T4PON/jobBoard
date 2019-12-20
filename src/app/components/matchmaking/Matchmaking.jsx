import React from 'react';
import image from './image.png';
import google from './google-logo.jpg';
import './Matchmaking.css';

const Matchmaking = () => {
  return (
    <div className="matchmaking">
      <div className="logging">
        <h1>Get started for free</h1>
        <div className="media">
          <a href="" className="media-item">
            <img src={google} className="google-icon" />
            Sign in with Google
          </a>
          <a href="" className="media-item">
            <i className="fab fa-github media-icon color-black"></i>
            Sign in with Github
          </a>
          <a href="" className="media-item">
            <i className="fab fa-linkedin media-icon color-blue"></i>
            Sign in with Linkedin
          </a>
          <a href="" className="media-item">
            <i className="fab fa-facebook-f media-icon color-blue"></i>
            Sign in with Facebook
          </a>
        </div>
        <div className="span">
          <span className="span-item">Or</span>
        </div>
        <div className="login">
          <div>
            <i className="fas fa-user login-icon"></i>
          </div>
          <div>
            <input type="text" placeholder="Email" className="login-input" />
          </div>
          <div>
            <i className="fas fa-lock  login-icon"></i>
          </div>
          <div>
            <input type="text" placeholder="Password" className="login-input" />
          </div>
          <input type="submit" value="Sign in" className="login-submit" />
        </div>
        <div className="register">
          <h2>
            New account? <a href="">Register</a>
          </h2>
          <a href="">Forgot password?</a>
        </div>
      </div>
      <div className="img">
        <img src={image} />
      </div>
    </div>
  );
};

export default Matchmaking;
