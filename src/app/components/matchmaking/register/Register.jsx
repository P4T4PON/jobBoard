import React, { Component } from 'react';
import image from '../image.png';
import google from '../google-logo.jpg';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
  state = {
    input_type: true,
    email: '',
    emailError: ''
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

  render() {
    return (
      <div className="reg-register">
        <div className="registering">
          <h1>Get started for free</h1>
          <div className="reg-media">
            <a href="" className="reg-media-item">
              <img src={google} className="google-icon" />
              <p>Register with google</p>
            </a>
            <a href="" className="reg-media-item">
              <i className="fab fa-github media-icon color-black"></i>
              <p>Register with Github</p>
            </a>
            <a href="" className="reg-media-item">
              <i className="fab fa-linkedin media-icon color-blue"></i>
              <p>Register With Linkedin</p>
            </a>
            <a href="" className="reg-media-item">
              <i className="fab fa-facebook-f media-icon color-blue"></i>
              <p>Register with Facebook</p>
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

            <div className="checkbox">
              <input type="checkbox"></input>
              <h2 className="checkbox-txt">
                I accept <Link to="">Terms</Link> of service *
              </h2>
            </div>

            <input type="submit" value="Register" className="login-submit" />
          </div>

          <div className="sup-register">
            <h2>
              Already have an account? <Link to="/devs/">Sign in</Link>
            </h2>
            <Link to="/devs/reset-password">Forgot password?</Link>
          </div>
        </div>
        <div className="reg-img">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}

export default Register;
