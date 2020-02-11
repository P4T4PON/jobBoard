import React, { useState } from 'react';
import image from '../image.png';
import MachmakingInput from '../MatchmakingInput';
import SubmitButton from '../../additions/SubmitButton';
import './ResetPassword.css';
<<<<<<< HEAD

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
=======
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
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800

  const checkEmailLength = event => {
    setEmail(event.target.value);
    if (email.includes('@') && email.includes('.') && email.length >= 5) {
      setEmailError('');
    } else {
      setEmailError('email is invalid');
    }
  };

  const emailExist = () => {
    if (email.length === 0) {
      setEmailError('email is required field');
    }
  };
<<<<<<< HEAD
=======
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
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800

  return (
    <div className="reset">
      <div className="reset-body">
        <h1>Reset password</h1>
        <h2>Type your email to get password reset url.</h2>
        <div className="reset-inputs">
          <MachmakingInput
            iconClass={'fas fa-user'}
            type={'text'}
            value={email}
            checkInputLength={checkEmailLength}
            checkInputBlurLength={emailExist}
            span={'Email'}
            error={emailError}
          />
          <SubmitButton value={'Reset password'} className={'reset-submit'} />
        </div>
      </div>

      <div className="res-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ResetPassword;
