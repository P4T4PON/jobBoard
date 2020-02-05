import React, { useState } from 'react';
import UserPanel from '../UserPanel';

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
                <div className="passwordChange-input">
                  <div>
                    <i className="fas fa-lock  login-icon"></i>
                  </div>

                  <div className="cont">
                    <div>
                      <input
                        type="text"
                        name="old password"
                        autoComplete="off"
                        required
                        value={oldPassword}
                        onChange={checkOldPasswordLength}
                        onBlur={checkOldPasswordLength}
                      />
                      <label htmlFor="email" className="label-name">
                        <span className="content-name">Old password</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className="passwordChange-input">
                  <div>
                    <i className="fas fa-lock  login-icon"></i>
                  </div>

                  <div className="cont">
                    <div>
                      <input
                        type="text"
                        name="new password"
                        autoComplete="off"
                        required
                        value={newPassword}
                        onChange={checkNewPasswordLength}
                        onBlur={checkNewPasswordLength}
                      />
                      <label htmlFor="email" className="label-name">
                        <span className="content-name">New password</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="Update profile"
              className="pink-button"
              onClick={changePassword}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
