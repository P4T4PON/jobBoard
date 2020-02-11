import React, { useState, Fragment } from 'react';
import image from './image.png';
import MachmakingHref from './MachmakingHref';
import MachmakingInput from './MatchmakingInput';
import SubmitButton from '../additions/SubmitButton';
import MachmakingLink from './MachmakingLink';
import './Matchmaking.css';
<<<<<<< HEAD

const Matchmaking = () => {
  const [input_type, setInputType] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
=======
//todo: zamień proszę na komponent funkcyjny
//todo: pamiętaj o folderze z assetami
class Matchmaking extends Component {
  state = {
    input_type: true,
    email: '',
    emailError: '',
    password: '',
    passwordError: ''
  };
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800

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
<<<<<<< HEAD
=======
  //todo niepodomykane odpowiednio tagi
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
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800

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
