import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserPreferences = () => {
  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);
  const [name, setName] = useState('TestUser');

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

  return (
    <div className="userLogin-content">
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
              <div className="userLogin-Optionslist userLogin-active">
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
              <div className="userLogin-Optionslist">
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
    </div>
  );
};

export default UserPreferences;
