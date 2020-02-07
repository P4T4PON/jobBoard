import React, { Component } from 'react';
import image from '../image.png';
import './ResetPassword.css';
//todo: zamień to na komponent funkcyjny
export default class ResetPassword extends Component {
  state = {
    input_type: true,
    email: '',
    emailError: ''
  };
  //todo: nieużywana funkcja
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
  //todo: podomykaj poprawnie tagi
  render() {
    return (
      <div className="reset">
        <div className="reset-body">
          <h1>Reset password</h1>
          <h2>Type your email to get password reset url.</h2>
          <div className="reset-inputs">
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

            <input
              type="submit"
              value="Reset password"
              className="reset-submit"
            ></input>
          </div>
        </div>

        <div className="res-img">
          <img src={image} alt="" />
        </div>
      </div>
    );
  }
}
