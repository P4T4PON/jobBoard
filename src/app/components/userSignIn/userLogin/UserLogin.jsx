import React from 'react';
import AnimatedBottomInput from '../../additions/AnimatedBottomInput';
import Checkbox from '../../additions/Checkbox';
import Submit from '../../additions/SubmitButton';
import LinkButton from '../../additions/LinkButton';
import UserSignIn from '../UserSignIn';

const UserLogin = () => {
  return (
    <UserSignIn>
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
        className={'colorBlue'}
      />
    </UserSignIn>
  );
};

export default UserLogin;
