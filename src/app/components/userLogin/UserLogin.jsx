import React, { Component } from 'react';
import './UserLogin.css';
import { Link } from 'react-router-dom';

export default class UserLogin extends Component {
  render() {
    return (
      <div className="main">
        {/*TODO: self-closing tag ale w takim razie po co Ci taki pusty div?*/}
        <div className="blocker"></div>
        <div className="card">
          <h1>justjoin.it</h1>

          <div className="input">
            <i className="fas fa-envelope"></i>
            <div className="form">
              <input type="text" name="name" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>
          </div>

          <div className="input">
            <i className="fas fa-lock"></i>

            <div className="form">
              <input
                type="password"
                name="name"
                autoComplete="off"
                required
                className="big"
              />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Password</span>
              </label>
            </div>
          </div>

          <div className="checkbox marg">
            <input type="checkbox" className="userCheckbox"></input>
            <p>Remember me</p>
          </div>

          <div className="submit">
            <input type="submit" value="Sign in"></input>
          </div>

          <div className="link">
            <Link to="/users/password/new">Forgot password?</Link>
          </div>
        </div>
      </div>
    );
  }
}
