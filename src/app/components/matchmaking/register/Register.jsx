import React from 'react';
import MachmakingLink from '../mathcmakingLink/MachmakingLink';
import { useSelector } from 'react-redux';
import Media from '../loggingBox/media/Media'
import { registerHrefs } from '../../../../constans'
import Login from './login/Login'
import './Register.css';

const Register = () => {
  const isDay = useSelector(state => state.isDay);

  return (
    <div className={isDay ? "regRegister" : 'regRegister regRegisterNightMode'}>
      <div
        className={isDay ? 'loggingBox' : 'loggingBox loggingBoxNightMode'}
      >
        <div className="registering">
          <Media hrefs={registerHrefs} />
          <Login isDay={isDay} text={'Register'} />
          <MachmakingLink
            text={'Already have an account? '}
            link={'/devs/'}
            linkText={' Sign in'}
            isDay={isDay}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
