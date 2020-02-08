import React, { useState } from 'react';
import UserPanel from '../UserPanel';
import AnimatedInput from '../../additions/AnimatedInput';
import SubmitButton from '../../additions/SubmitButton';
import './UserSettings.css';

const UserSettings = () => {
  const [panelActive] = useState(4);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [setPassword] = useState('');

  const checkOldPasswordLength = event => {
    setOldPassword(event.target.value);
  };

  const checkNewPasswordLength = event => {
    setNewPassword(event.target.value);
  };

  const changePassword = () => {
    if (oldPassword === newPassword) {
      setPassword(newPassword);
    }
  };

  return (
    <div className="userLogin-content width-100vw">
      <UserPanel active={panelActive} />
      <div className="userSettings">
        <div className="userSettings-content">
          <h1>Settings</h1>
          <div className="passwordChange">
            <div className="passwordChange-content">
              <h2 className="margin-0">Set up new password</h2>
              <p className="margin-0">Follow the instructions below</p>

              <div className="passwordChange-box">
                <AnimatedInput
                  inputClass={'fas fa-lock  login-icon'}
                  className={'cont'}
                  type={'password'}
                  name={'old password'}
                  value={oldPassword}
                  checkInputLength={checkOldPasswordLength}
                  checkInputBlurLength={checkOldPasswordLength}
                  span={'Old password'}
                />

                <AnimatedInput
                  inputClass={'fas fa-lock  login-icon'}
                  className={'cont'}
                  type={'password'}
                  name={'new password'}
                  value={newPassword}
                  checkInputLength={checkNewPasswordLength}
                  checkInputBlurLength={checkNewPasswordLength}
                  span={'New password'}
                />
              </div>
            </div>
          </div>
          <SubmitButton
            value={'Update profile'}
            className={'pink-button'}
            submit={changePassword}
          />
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
