import React, { Fragment } from 'react';
import './UserRegister.css';
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
