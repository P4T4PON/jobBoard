import React, { Component } from 'react';
import './UserRegister.css';
import { Link } from 'react-router-dom';

export default class UserRegister extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocker"></div>
        <div className="card  center">
          <h1>justjoin.it</h1>
          <p>Forgot your password ?</p>
          <div className="input extra">
            <i className="fas fa-envelope"></i>
            <div className="form">
              <input type="text" name="name" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>
          </div>

          <div className="submit super">
            <input type="submit" value="RESET PASSWORD"></input>
          </div>

          <div className="link reg">
            <Link to="/users/sign_in">Sign in</Link>
          </div>
        </div>
      </div>
    );
  }
}
