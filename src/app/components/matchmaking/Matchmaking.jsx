import React, { Component } from 'react';
import image from './image.png';
import google from './google-logo.jpg';
import { Link } from 'react-router-dom';
import './Matchmaking.css';

class Matchmaking extends Component {
  state = {
    input_type: true,
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  };

  toggleInput = () => {
    this.setState({ input_type: !this.state.input_type });
  };

  checkEmailLength = event => {
    this.setState({ email: event.target.value });
    if (
      this.state.email.includes('@') &&
      this.state.email.includes('.') &&
      this.state.email.length >= 5
    ) {
      this.setState({ emailError: '' });
    } else {
      this.setState({ emailError: 'email is invalid' });
    }
  };

  emailExist = () => {
    if (this.state.email.length === 0) {
      this.setState({ emailError: 'email is required field' });
    }
  };

  passwordExist = () => {
    if (this.state.password.length === 0) {
      this.setState({ passwordError: 'password is required field' });
    } else if (this.state.password.length < 6) {
      console.log(this.state.password.length);
      this.setState({
        passwordError: 'password must have at least 6 characters'
      });
    }
  };

  checkPasswordLength = event => {
    console.log(this.state.password.length);
    this.setState({ password: event.target.value });
    if (this.state.password.length === 5) {
      this.setState({ passwordError: '' });
    } else if (this.state.password.length < 6) {
      this.setState({
        passwordError: 'password must have at least 6 characters'
      });
    }
  };
  render() {
    return (
      <div className="matchmaking">
        <div className="logging">
          <h1>Get started for free</h1>
          <div className="media">
            <a href="" className="media-item">
              <img src={google} className="google-icon" />
              <p>Sign in with Google</p>
            </a>
            <a href="" className="media-item">
              <i className="fab fa-github media-icon color-black"></i>
              <p> Sign in with Github</p>
            </a>
            <a href="" className="media-item">
              <i className="fab fa-linkedin media-icon color-blue"></i>
              <p>Sign in with Linkedin</p>
            </a>
            <a href="" className="media-item">
              <i className="fab fa-facebook-f media-icon color-blue"></i>
              <p>Sign in with Facebook</p>
            </a>
          </div>

          <div className="span">
            <span className="span-item">Or</span>
          </div>

          <div className="login">
            <div>
              <i className="fas fa-user login-icon"></i>
            </div>

            <div className="cont">
              <div>
                <input
                  type="text"
                  name="email"
                  autoComplete="off"
                  required
                  value={this.state.email}
                  onChange={this.checkEmailLength}
                  onBlur={this.emailExist}
                />
                <label htmlFor="email" className="label-name">
                  <span className="content-name">Email</span>
                </label>
              </div>
            </div>
            <div className="error">{this.state.emailError}</div>

            <div>
              <i className="fas fa-lock  login-icon"></i>
            </div>
            <div className="cont">
              <div>
                <input
                  type={this.state.input_type ? 'password' : 'text'}
                  name="password"
                  autoComplete="off"
                  required
                  className={this.state.input_type ? 'big' : 'small'}
                  value={this.state.password}
                  onChange={this.checkPasswordLength}
                  onBlur={this.passwordExist}
                />

                <label htmlFor="email" className="label-name">
                  <span className="content-name">Password</span>
                </label>
              </div>
              <div className="password-shower" onClick={this.toggleInput}>
                <i className="fas fa-eye"></i>
              </div>
            </div>
            <div className="error">{this.state.passwordError}</div>

            <input type="submit" value="Sign in" className="login-submit" />
          </div>

          <div className="register">
            <h2>
              New account? <Link to="/devs/Register">Register</Link>
            </h2>
            <Link to="/devs/reset-password">Forgot password?</Link>
          </div>
        </div>
        <div className="img">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Matchmaking;
