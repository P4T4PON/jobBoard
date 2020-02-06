import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../actions/index';
import LinkItem from './LinkItem';
//nieuzywane importy
const UserPanel = props => {
  const dispatch = useDispatch();

  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);

  let toggleJobStatus = event => {
    setJobStatus(event.target.id);
    setShowStatus(!showStatus);
  };
  //lapanie elementow dom js'em -> react :)
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
          <span>{props.inputValue}</span>
        </div>
        {/*jaki zadanie ma logika ponizszego diva? strasznie zagmatwane*/}
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
          {/* zla nazwa funkcji*/}
          onClick={() => {
            setShowStatus(!showStatus);
          }}
        >
          {/*self-closing tagi */}
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
          {/*czym jest klasa small-chew? i self closing tag + dlaczego tak skomplikwoana logika do nadawania klasy?*/}
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
            {/*powtarzalnosc kodu, nadajesz id elementom listy co jest zla praktyka i one sa praktycznie identyczne*/}
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
              id="1"
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
              id="2"
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
              id="3"
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
              id="4"
              className={
                props.active === 4
                  ? 'userLogin-Optionslist userLogin-active'
                  : 'userLogin-Optionslist'
              }
              onClick={loginActive}
            >
              {/*self closing tag*/}
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
