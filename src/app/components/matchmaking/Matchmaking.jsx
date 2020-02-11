import React, { useState, Fragment } from 'react';
import image from './image.png';
import MachmakingHref from './MachmakingHref';
import MachmakingInput from './MatchmakingInput';
import SubmitButton from '../additions/SubmitButton';
import MachmakingLink from './MachmakingLink';
import './Matchmaking.css';

const Matchmaking = () => {
  const [input_type, setInputType] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggleInput = () => {
    setInputType(!input_type);
  };

  const checkEmailLength = event => {
    setEmail(event.target.value);
    if (
      email.includes('@') &&
      email.includes('.') &&
      event.target.value.length >= 5
    ) {
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

  const passwordExist = () => {
    if (password.length === 0) {
      setPasswordError('password is required field');
    } else if (password.length < 6) {
      setPasswordError('password must have at least 6 characters');
    }
  };

  const checkPasswordLength = event => {
    const etv = event.target.value;
    setPassword(etv);
    if (etv.length >= 6) {
      setPasswordError('');
    } else if (etv.length < 6) {
      setPasswordError('password must have at least 6 characters');
    }
  };

  return (
    <div className="matchmaking">
      <div className="logging">
        <div className="media">
          <h1>Get started for free</h1>

          <MachmakingHref
            color={'black'}
            className={'fab fa-google'}
            paragraph={'Sign in with Google'}
          />
          <MachmakingHref
            color={'black'}
            className={'fab fa-github'}
            paragraph={'Sign in with Github'}
          />

          <MachmakingHref
            color={'blue'}
            className={'fab fa-linkedin'}
            paragraph={'Sign in with Linkedin'}
          />

          <MachmakingHref
            color={'blue'}
            className={'fab fa-facebook-f'}
            paragraph={'Sign in with Facebook'}
          />
        </div>

        <div className="span">
          <span className="span-item">Or</span>
        </div>

        <div className="login">
          <MachmakingInput
            iconClass={'fas fa-user'}
            type={'text'}
            value={email}
            checkInputLength={checkEmailLength}
            checkInputBlurLength={emailExist}
            span={'Email'}
            error={emailError}
          />
          <MachmakingInput
            iconClass={'fas fa-lock'}
            type={input_type ? 'password' : 'text'}
            toggleInput={toggleInput}
            inputClass={input_type ? 'big' : 'small'}
            value={password}
            checkInputLength={checkPasswordLength}
            checkInputBlurLength={passwordExist}
            span={'Password'}
            showPassword={true}
            error={passwordError}
          />
          <SubmitButton value={'Sign in'} className={'login-submit'} />
        </div>

        <MachmakingLink
          text={'New account? '}
          link={'/devs/Register'}
          linkText={' Register'}
        />
      </div>
      <div className="img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Matchmaking;
