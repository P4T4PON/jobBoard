import React, { useState } from 'react';
import image from '../image.png';
import MachmakingInput from '../MatchmakingInput';
import SubmitButton from '../../additions/SubmitButton';
import './ResetPassword.css';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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
