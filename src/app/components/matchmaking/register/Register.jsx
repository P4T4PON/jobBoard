import React, { useState } from 'react';
import image from '../image.png';
import { Link } from 'react-router-dom';
import MachmakingHref from '../MachmakingHref';
import MachmakingInput from '../MatchmakingInput';
import SubmitButton from '../../additions/SubmitButton';
import MachmakingLink from '../MachmakingLink';
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

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

  return (
    <div className="reg-register">
      <div className="registering">
        <div className="media">
          <h1>Get started for free</h1>

          <MachmakingHref
            color={'black'}
            className={'fab fa-google'}
            paragraph={'Login in with Google'}
          />
          <MachmakingHref
            color={'black'}
            className={'fab fa-github'}
            paragraph={'Login in with Github'}
          />

          <MachmakingHref
            color={'blue'}
            className={'fab fa-linkedin'}
            paragraph={'Login in with Linkedin'}
          />

          <MachmakingHref
            color={'blue'}
            className={'fab fa-facebook-f'}
            paragraph={'Login in with Facebook'}
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

          <div className="checkbox">
            <input type="checkbox"></input>
            <h2 className="checkbox-txt">
              I accept <Link to="">Terms</Link> of service *
            </h2>
          </div>

          <SubmitButton value={'Register'} className={'login-submit'} />
        </div>

        <MachmakingLink
          text={'Already have an account? '}
          link={'/devs/'}
          linkText={' Sign in'}
        />
      </div>
      <div className="reg-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
