import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from '../userPanel/UserPanel';
import './UserMachmaking.css';

const UserPreferences = () => {
  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);
  const [name, setName] = useState('TestUser');

  const [city, setCity] = useState('trójmiasto');
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(5);

  const [tech, setTech] = useState('javascript');
  const [skill, setSkill] = useState('react');
  const [remote, setRemote] = useState('yes');

  const [stage, setStage] = useState('Growth stage');
  const [type, setType] = useState('Software house');
  const [seniority, setSeniority] = useState('Junior');
  const [industry, setIndustry] = useState('Other');
  const [employment, setEmployment] = useState('B2B');

  const [preferences, setPreferences] = useState(true);

  const [active, setActive] = useState(true);
  const [aplied, setAplied] = useState(false);
  const [rejected, setRejected] = useState(false);

  let toggleActive = () => {
    setActive(true);
    setAplied(false);
    setRejected(false);
  };

  let toggleAplied = () => {
    setActive(false);
    setAplied(true);
    setRejected(false);
  };

  let toggleRejected = () => {
    setActive(false);
    setAplied(false);
    setRejected(true);
  };

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

  let showPreferences = () => {
    setPreferences(!preferences);
  };

  return (
    <div className="userLogin-content">
      <UserPanel />
      <div className="userMachmaking">
        <div className="userMachmaking-box">
          <div className="userMachmaking-header">
            <h2>Your preferences</h2>
            <Link to="/devs/panel/preferences">
              <div className="editPreferences-btn">
                <p>Edit</p>
              </div>
            </Link>
          </div>
          <div className="userMachmaking-preferences">
            <div className="preferencesBox">
              <div className="preferencesItem">
                <i className="fas fa-map-marker-alt blueBox"></i>
                <div className="preferencesText">
                  <b>{city}</b>
                  <span>CITY</span>
                </div>
              </div>
            </div>

            <div className="preferencesBox">
              <div className="preferencesItem">
                <i className="fas fa-dollar-sign lightBlueBox"></i>
                <div className="preferencesText">
                  <b>
                    {minValue}k - {maxValue}k{' '}
                  </b>
                  <span>SALARY</span>
                </div>
              </div>
            </div>

            <div className="preferencesBox">
              <div className="preferencesItem">
                <i className="fas fa-microchip pinkBox"></i>
                <div className="preferencesText">
                  <b>{tech}</b>
                  <span>MAIN TECH</span>
                </div>
              </div>
            </div>

            <div className="preferencesBox">
              <div className="preferencesItem">
                <i className="fab fa-react orangeBox"></i>
                <div className="preferencesText">
                  <b>{skill}</b>
                  <span>SKILLS</span>
                </div>
              </div>
            </div>

            <div className="preferencesBox">
              <div className="preferencesItem">
                <i className="fas fa-umbrella-beach lightBlueBlueBox"></i>

                <div className="preferencesText">
                  <b>{remote}</b>
                  <span>REMOTE</span>
                </div>
              </div>
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <div className="preferencesItem">
                <i className="fas fa-user-friends yellowBox"></i>

                <div className="preferencesText">
                  <b>{stage}</b>
                  <span>STAGE</span>
                </div>
              </div>
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <div className="preferencesItem">
                <i className="fas fa-city redBox"></i>
                <div className="preferencesText">
                  <b>{type}</b>
                  <span>TYPE</span>
                </div>
              </div>
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <div className="preferencesItem">
                <i className="fas fa-chart-line greenBox"></i>
                <div className="preferencesText">
                  <b>{seniority}</b>
                  <span>SENIORITY</span>
                </div>
              </div>
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <div className="preferencesItem">
                <i className="far fa-building greyBox "></i>
                <div className="preferencesText">
                  <b>{industry}</b>
                  <span>INDUSTRY</span>
                </div>
              </div>
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <div className="preferencesItem">
                <i className="far fa-file purpleBox"></i>
                <div className="preferencesText">
                  <b>{employment}</b>
                  <span>EMP. TYPE</span>
                </div>
              </div>
            </div>
          </div>
          <div className="showLess">
            <div className="showLess-button" onClick={showPreferences}>
              {preferences ? 'Show more' : 'Show less'}

              <i
                className={
                  preferences ? 'fas fa-chevron-down' : 'fas fa-chevron-up'
                }
              ></i>
            </div>
          </div>

          <div className="replies">
            <h1>Matchmaking</h1>
            <div className="userMachmaking-options">
              <div className="userMachmaking-status">
                <div
                  className={
                    active
                      ? 'userMachmaking-item left replied-active'
                      : 'userMachmaking-item left'
                  }
                  onClick={toggleActive}
                >
                  Active
                </div>
                <div
                  className={
                    aplied
                      ? 'userMachmaking-item middle replied-active'
                      : 'userMachmaking-item middle'
                  }
                  onClick={toggleAplied}
                >
                  Aplied
                </div>
                <div
                  className={
                    rejected
                      ? 'userMachmaking-item right replied-active'
                      : 'userMachmaking-item right'
                  }
                  onClick={toggleRejected}
                >
                  Rejected
                </div>
              </div>
            </div>
          </div>
          <div className="maches-box">
            <div className="maches-content">
              <i className="far fa-folder-open"></i>
              No matches found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;
