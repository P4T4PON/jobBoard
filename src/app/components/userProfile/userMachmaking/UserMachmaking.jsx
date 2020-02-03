import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from '../UserPanel';

import './UserMachmaking.css';

const UserPreferences = () => {
  const [panelActive, setPanelActive] = useState(2);
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

  let toggleActive = event => {
    let user_status = document.querySelector('.userMachmaking-status');
    for (let i = 0; i < user_status.children.length; i++) {
      if (user_status.children[i].className.includes('replied-active')) {
        user_status.children[i].classList.remove('replied-active');
      }
    }
    if (!event.target.className.includes('replied-active')) {
      event.target.className += ' replied-active';
    }
  };

  let showPreferences = () => {
    setPreferences(!preferences);
  };

  return (
    <div className="userLogin-content">
      <UserPanel active={panelActive} />
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
                  className="userMachmaking-item left replied-active"
                  onClick={toggleActive}
                >
                  Active
                </div>
                <div
                  className="userMachmaking-item middle"
                  onClick={toggleActive}
                >
                  Aplied
                </div>
                <div
                  className="userMachmaking-item right"
                  onClick={toggleActive}
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
