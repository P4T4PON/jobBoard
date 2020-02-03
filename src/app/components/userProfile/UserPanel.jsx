import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../actions/index';

const UserPanel = props => {
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);
  const [name, setName] = useState('TestUser');

  let toggleJobStatus = event => {
    setJobStatus(event.target.id);
    setShowStatus(!showStatus);
  };

  let loginActive = event => {
    if (event.target.parentElement.className === 'userLogin-Optionslist') {
      event.target.parentElement.className =
        'userLogin-Optionslist userLogin-active';
    } else if (event.target.className === 'userLogin-Optionslist') {
      event.target.className = 'userLogin-Optionslist userLogin-active';
    }
  };

  return (
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
            <li onClick={toggleJobStatus} id="green">
              I’m actively looking for a job
            </li>
            <li onClick={toggleJobStatus} id="blue">
              Open for proposals
            </li>
            <li onClick={toggleJobStatus} id="red">
              Not open for proposals
            </li>
          </ul>
        </div>
        <div className="userLogin-Options">
          <Link to="/devs/panel/profile">
            <div
              className={
                props.active === 1
                  ? 'userLogin-Optionslist userLogin-active'
                  : 'userLogin-Optionslist'
              }
              onClick={loginActive}
            >
              <i className="far fa-user"></i>
              <p>My profile</p>
            </div>
          </Link>
          <Link to="/devs/panel/matchmaking">
            <div
              className={
                props.active === 2
                  ? 'userLogin-Optionslist userLogin-active'
                  : 'userLogin-Optionslist'
              }
              onClick={loginActive}
            >
              <i className="fas fa-inbox"></i>
              <p>Matchmaking</p>
            </div>
          </Link>
          <Link to="/devs/panel/preferences">
            <div
              className={
                props.active === 3
                  ? 'userLogin-Optionslist userLogin-active'
                  : 'userLogin-Optionslist'
              }
              onClick={loginActive}
            >
              <i className="fas fa-pen"></i>
              <p>Preferences</p>
            </div>
          </Link>
          <Link to="/devs/panel/settings">
            <div
              className={
                props.active === 4
                  ? 'userLogin-Optionslist userLogin-active'
                  : 'userLogin-Optionslist'
              }
              onClick={loginActive}
            >
              <i className="fas fa-cog"></i>
              <p>Settings</p>
            </div>
          </Link>
          <Link to="/devs/">
            <div
              className="userLogin-Optionslist"
              onClick={() => dispatch(logged())}
            >
              <i className="fas fa-power-off"></i>
              <p>Log out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
