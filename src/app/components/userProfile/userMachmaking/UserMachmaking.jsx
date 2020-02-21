import React, { useState } from 'react';
import UserPanel from '../UserPanel';
import UserChoices from './UserChoices';
import LinkButton from '../../additions/LinkButton';
import ShowButton from './ShowButton';
import { yourPreferences } from '../../../../constans';
import Replies from './Replies';
import './UserMachmaking.css';

const UserPreferences = () => {
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
        />
      </div>
    ));
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
            {togglePreferences()}
          </div>
          <ShowButton
            preferences={preferences}
            showPreferences={() => setPreferences(!preferences)}
          />
          <div className="replies">
            <h1>Matchmaking</h1>
            <div className="userMachmaking-options">
              <div className="userMachmaking-status">
                <Replies
                  repId={1}
                  text={'Active'}
                  side={'left'}
                  toggleActive={() => setActive(1)}
                  active={active}
                />

                <Replies
                  repId={2}
                  text={'Aplied'}
                  side={'middle'}
                  toggleActive={() => setActive(2)}
                  active={active}
                />

                <Replies
                  repId={3}
                  text={'Rejected'}
                  side={'right'}
                  toggleActive={() => setActive(3)}
                  active={active}
                />
              </div>
            </div>
          </div>

          <div className="maches-box">
            <div className="maches-content">
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
