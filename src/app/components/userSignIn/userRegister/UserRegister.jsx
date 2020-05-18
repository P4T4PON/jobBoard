import React from 'react';
import UserSignIn from '../UserSignIn';
import AnimatedBottomInput from '../../additions/AnimatedBottomInput';
import Submit from '../../additions/SubmitButton';
import LinkButton from '../../additions/LinkButton';

const UserRegister = () => {
  return (
    <UserSignIn
      className={'centerRegister'}
      paragraph={'Forgot your password ?'}
    >
      <p>Forgot your password?</p>
      <AnimatedBottomInput
        iconClass={'fas fa-envelope'}
        type={'text'}
        span={'Email'}
      />
      <Submit value={'RESET PASSWORD'} divClass={'submit registerSumbit'} />
      <LinkButton
        divClass={'link reg'}
        link={'/users/sign_in'}
        text={'Sign in'}
        className={'colorBlue'}
      />
    </UserSignIn>
  );
};

export default UserRegister;
