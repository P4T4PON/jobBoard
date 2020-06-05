import React from 'react';
import './ResetPassword.css';
import { useSelector } from 'react-redux';
import Login from '../../register/login/Login'
import ResetPasswordBox from '../ResetPasswordBox'

const ResetPassword = () => {
  const isDay = useSelector(state => state.isDay);

  return (
    <ResetPasswordBox isDay={isDay}>
      <Login isDay={isDay} text={'Reset password'} />
    </ResetPasswordBox>
  );
};

export default ResetPassword;
