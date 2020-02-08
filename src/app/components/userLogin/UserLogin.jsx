import React, { Fragment } from 'react';
import './UserLogin.css';
import AnimatedBottomInput from '../additions/AnimatedBottomInput';
import Checkbox from '../additions/Checkbox';
import Submit from '../additions/SubmitButton';
import LinkButton from '../additions/LinkButton';
import UserBox from './UserBox';

const UserLogin = () => {
  return (
    <UserBox
      content={
        <Fragment>
          <AnimatedBottomInput
            iconClass={'fas fa-envelope'}
            type={'text'}
            span={'Email'}
          />
          <AnimatedBottomInput
            iconClass={'fas fa-lock'}
            type={'password'}
            span={'Password'}
          />
          <Checkbox
            className={'checkbox marg'}
            inputClass={'userCheckbox'}
            paragraph={'Remember me'}
          />
          <Submit value={'Sign in'} divClass={'submit'} />
          <LinkButton
            divClass={'link'}
            link={'/users/password/new'}
            text={'Forgot password?'}
          />{' '}
        </Fragment>
      }
    />
  );
};

export default UserLogin;
