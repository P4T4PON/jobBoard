import React, { useState } from 'react';
import UserPanel from '../UserPanel';
import UserChoices from './UserChoices';
import LinkButton from '../../additions/LinkButton';
import ShowButton from './ShowButton';
import { yourPreferences } from '../../../../constans';
import Replies from './Replies';
import './UserMachmaking.css';
import { useSelector } from 'react-redux';

const UserPreferences = () => {
  const isDay = useSelector(state => state.isDay);
  const [active, setActive] = useState(1);
  const [panelActive] = useState(2);
  const [preferences, setPreferences] = useState(true);

  const togglePreferences = () => {
    return yourPreferences.map((pref, index) => (
      <div
        className={preferences && index > 4 ? 'display-none' : 'preferencesBox'}
      >
        <UserChoices
          key={index}
          iconClass={pref[2]}
          b={pref[1]}
          span={pref[0]}
          isDay={isDay}
        />
      </div>
    ));
  };

  return (
    <div className="userLogin-content">
      <UserPanel active={panelActive} />
      <div
        className={
          isDay ? 'userMachmaking' : 'userMachmaking userMachmakingNightMode'
        }
      >
        <div className="userMachmaking-box">
          <div
            className={
              isDay
                ? 'userMachmaking-header'
                : 'userMachmaking-header userMachmaking-headerNightMode'
            }
          >
            <h2>Your preferences</h2>
            <LinkButton
              link={'/devs/panel/preferences'}
              className={'editPreferences-btn'}
              text={'Edit'}
            />
          </div>

          <div className="userMachmaking-preferences">
            {togglePreferences()}
          </div>
          <ShowButton
            preferences={preferences}
            showPreferences={() => setPreferences(!preferences)}
          />
          <div className={isDay ? 'replies' : 'replies repliesNightMode'}>
            <h1>Matchmaking</h1>
            <div className="userMachmaking-options">
              <div className="userMachmaking-status">
                <Replies
                  repId={1}
                  text={'Active'}
                  side={'left'}
                  toggleActive={() => setActive(1)}
                  active={active}
                  isDay={isDay}
                />

                <Replies
                  repId={2}
                  text={'Aplied'}
                  side={'middle'}
                  toggleActive={() => setActive(2)}
                  active={active}
                  isDay={isDay}
                />

                <Replies
                  repId={3}
                  text={'Rejected'}
                  side={'right'}
                  toggleActive={() => setActive(3)}
                  active={active}
                  isDay={isDay}
                />
              </div>
            </div>
          </div>

          <div className="maches-box">
            <div
              className={
                isDay
                  ? 'maches-content'
                  : 'maches-content maches-contentNightMode'
              }
            >
              <i className="far fa-folder-open" />
              No matches found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPreferences;
