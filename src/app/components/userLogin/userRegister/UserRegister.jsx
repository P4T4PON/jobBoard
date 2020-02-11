import React, { Fragment } from 'react';
import './UserRegister.css';
<<<<<<< HEAD
import UserBox from '../UserBox';
import AnimatedBottomInput from '../../additions/AnimatedBottomInput';
import Submit from '../../additions/SubmitButton';
import LinkButton from '../../additions/LinkButton';

const UserRegister = () => {
  return (
    <UserBox
      className={'center'}
      paragraph={'Forgot your password ?'}
      content={
        <Fragment>
          <p>Forgot your password?</p>
          <AnimatedBottomInput
            iconClass={'fas fa-envelope'}
            type={'text'}
            span={'Email'}
          />
=======
import { Link } from 'react-router-dom';
//klasowy komponent - zamień na funkcyjny
export default class UserRegister extends Component {
  render() {
    return (
      <div className="main">
        <div className="blocker"></div>
        <div className="card  center">
          <h1>justjoin.it</h1>
          <p>Forgot your password ?</p>
          <div className="input extra">
            <i className="fas fa-envelope"></i>
            <div className="form">
              <input type="text" name="name" autoComplete="off" required />
              <label htmlFor="name" className="label-name">
                <span className="content-name">Email</span>
              </label>
            </div>
          </div>
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800

          <Submit value={'RESET PASSWORD'} divClass={'submit super'} />

          <LinkButton
            divClass={'link reg'}
            link={'/users/sign_in'}
            text={'Sign in'}
            className={'col-blue'}
          />
        </Fragment>
      }
    />
  );
};

export default UserRegister;
