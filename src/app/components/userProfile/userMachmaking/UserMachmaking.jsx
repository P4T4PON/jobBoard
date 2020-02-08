import React, { useState } from 'react';
import UserPanel from '../UserPanel';
import UserChoices from './UserChoices';
import LinkButton from '../../additions/LinkButton';
import './UserMachmaking.css';

const UserPreferences = () => {
  const [panelActive] = useState(2);
  const [city] = useState('trójmiasto');
  const [minValue] = useState(0);
  const [maxValue] = useState(5);

  const [tech] = useState('javascript');
  const [skill] = useState('react');
  const [remote] = useState('yes');

  const [stage] = useState('Growth stage');
  const [type] = useState('Software house');
  const [seniority] = useState('Junior');
  const [industry] = useState('Other');
  const [employment] = useState('B2B');

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
            <LinkButton
              link={'/devs/panel/preferences'}
              className={'editPreferences-btn'}
              text={'Edit'}
            />
          </div>
          <div className="userMachmaking-preferences">
            <UserChoices
              iconClass={'fas fa-map-marker-alt blueBox'}
              b={city}
              span={'CITY'}
            />

            <UserChoices
              iconClass={'fas fa-dollar-sign lightBlueBox'}
              b={`${minValue}k - ${maxValue}k`}
              span={'SALARY'}
            />

            <UserChoices
              iconClass={'fas fa-microchip pinkBox'}
              b={tech}
              span={'MAIN TECH'}
            />

            <UserChoices
              iconClass={'fab fa-react orangeBox'}
              b={skill}
              span={'SKILLS'}
            />

            <UserChoices
              iconClass={'fas fa-umbrella-beach lightBlueBlueBox'}
              b={remote}
              span={'REMOTE'}
            />

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <UserChoices
                bool={true}
                iconClass={'fas fa-user-friends yellowBox'}
                b={stage}
                span={'STAGE'}
              />
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <UserChoices
                bool={true}
                iconClass={'fas fa-city redBox'}
                b={type}
                span={'TYPE'}
              />
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <UserChoices
                bool={true}
                iconClass={'fas fa-chart-line greenBox'}
                b={seniority}
                span={'SENIORITY'}
              />
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <UserChoices
                bool={true}
                iconClass={'far fa-building greyBox'}
                b={industry}
                span={'INDUSTRY'}
              />
            </div>

            <div className={preferences ? 'display-none' : 'preferencesBox'}>
              <UserChoices
                bool={true}
                iconClass={'far fa-file purpleBox'}
                b={employment}
                span={'EMP.TYPE'}
              />
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
