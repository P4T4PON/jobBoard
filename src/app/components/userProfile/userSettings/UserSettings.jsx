import React, { useState } from 'react';
import UserPanel from '../UserPanel';
import AnimatedInput from '../../additions/AnimatedInput';
import SubmitButton from '../../additions/SubmitButton';
import './UserSettings.css';

const UserSettings = () => {
  const [panelActive, setPanelActive] = useState(4);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  let checkOldPasswordLength = event => {
    setOldPassword(event.target.value);
  };

  let checkNewPasswordLength = event => {
    setNewPassword(event.target.value);
  };

  let changePassword = () => {
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
                  type={'text'}
                  name={'old password'}
                  value={oldPassword}
                  fooOnChange={checkOldPasswordLength}
                  fooOnBlur={checkOldPasswordLength}
                  span={'Old password'}
                />

                <AnimatedInput
                  inputClass={'fas fa-lock  login-icon'}
                  className={'cont'}
                  type={'text'}
                  name={'new password'}
                  value={newPassword}
                  fooOnChange={checkNewPasswordLength}
                  fooOnBlur={checkNewPasswordLength}
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
