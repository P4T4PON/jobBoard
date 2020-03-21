import React, { useState } from 'react';
import image from '../image.png';
import { Link } from 'react-router-dom';
import MachmakingHref from '../MachmakingHref';
import MachmakingInput from '../MatchmakingInput';
import SubmitButton from '../../additions/SubmitButton';
import MachmakingLink from '../MachmakingLink';
import { useSelector } from 'react-redux';
import './Register.css';

const Register = () => {
  const isDay = useSelector(state => state.isDay);
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
    } else if (event.target.value === '') {
      setEmailError('email is required field');
    } else {
      setEmailError('email is invalid');
    }
  };

  const emailExist = event => {
    if (email.length === 0) {
      setEmailError('email is required field');
    } else if (email.length < 5) {
      setEmailError('email is invalid');
    }
  };

  return (
    <div className="reg-register">
      <div
        className={isDay ? 'logging-box' : 'logging-box logging-boxNightMode'}
      >
        <div className="registering">
          <div className="media">
            <h1>Get started for free</h1>

            <MachmakingHref
              color={'black'}
              className={'fab fa-google'}
              paragraph={'Register in with Google'}
            />
            <MachmakingHref
              color={'black'}
              className={'fab fa-github'}
              paragraph={'Register in with Github'}
            />

            <MachmakingHref
              color={'blue'}
              className={'fab fa-linkedin'}
              paragraph={'Register in with Linkedin'}
            />

            <MachmakingHref
              color={'blue'}
              className={'fab fa-facebook-f'}
              paragraph={'Register in with Facebook'}
            />

            <div className="span">
              <span className="span-item">Or</span>
            </div>
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
              isDay={isDay}
            />

            <div className="register-checkbox">
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
            isDay={isDay}
          />
        </div>
      </div>
      <div className="reg-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
