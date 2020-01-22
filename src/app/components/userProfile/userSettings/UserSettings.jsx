import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './UserSettings.css';

const UserSettings = () => {
  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);
  const [name, setName] = useState('TestUser');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [password, setPassword] = useState('');

  let toggleJobStatusGreen = () => {
    setJobStatus('green');
    setShowStatus(!showStatus);
  };

  let toggleJobStatusBlue = () => {
    setJobStatus('blue');
    setShowStatus(!showStatus);
  };

  let toggleJobStatusRed = () => {
    setJobStatus('red');
    setShowStatus(!showStatus);
  };

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
      <div className="userLogin-sidebar">
        <div className="userLogin-sidebarContent">
          <div className="userLogin-img"></div>
          <div className="userLogin-welcome">
            <p>Welcome</p>
            <span>{name}</span>
          </div>
          <div
            className={
              jobStatus === 'green'
                ? 'userLogin-jobStatus green bg-green'
                : jobStatus === 'blue'
                ? 'userLogin-jobStatus blue bg-blue'
                : jobStatus === 'red'
                ? 'userLogin-jobStatus red bg-red'
                : null
            }
            onClick={() => {
              setShowStatus(!showStatus);
            }}
          >
            {jobStatus === 'green' ? (
              <i className="far fa-check-circle big-circle green"></i>
            ) : jobStatus === 'blue' ? (
              <i className="far fa-envelope big-circle"></i>
            ) : jobStatus === 'red' ? (
              <i className="fas fa-times-circle big-circle"></i>
            ) : null}

            <p>
              {jobStatus === 'green'
                ? 'I’m actively looking for a job'
                : jobStatus === 'blue'
                ? 'Open for proposals'
                : jobStatus === 'red'
                ? 'Not open for proposals'
                : null}
            </p>
            <i
              className={
                jobStatus === 'green'
                  ? 'fas fa-chevron-down small-chew green'
                  : jobStatus === 'blue'
                  ? 'fas fa-chevron-down small-chew blue'
                  : jobStatus === 'red'
                  ? 'fas fa-chevron-down small-chew red'
                  : null
              }
            ></i>
          </div>
          <div
            className={
              showStatus
                ? 'userLogin-jobStatusChanger'
                : 'userLogin-jobStatusChanger display-none'
            }
          >
            <ul>
              <li onClick={toggleJobStatusGreen}>
                I’m actively looking for a job
              </li>
              <li onClick={toggleJobStatusBlue}>Open for proposals</li>
              <li onClick={toggleJobStatusRed}>Not open for proposals</li>
            </ul>
          </div>
          <div className="userLogin-Options">
            <Link to="/devs/panel/profile">
              <div className="userLogin-Optionslist ">
                <i className="far fa-user"></i>
                <p>My profile</p>
              </div>
            </Link>
            <Link to="/devs/panel/matchmaking">
              <div className="userLogin-Optionslist">
                <i className="fas fa-inbox"></i>
                <p>Matchmaking</p>
              </div>
            </Link>
            <Link to="/devs/panel/preferences">
              <div className="userLogin-Optionslist ">
                <i className="fas fa-pen"></i>
                <p>Preferences</p>
              </div>
            </Link>
            <Link to="/devs/panel/settings">
              <div className="userLogin-Optionslist userLogin-active">
                <i className="fas fa-cog"></i>
                <p>Settings</p>
              </div>
            </Link>
            <Link to="/devs/">
              <div className="userLogin-Optionslist">
                <i className="fas fa-power-off"></i>
                <p>Log out</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
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
