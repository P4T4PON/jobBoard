import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logged } from '../../actions/index';
import UserStatus from './UserStatus';
import LinkItem from './LinkItem';
import ListItem from './ListItem';

const UserPanel = props => {
  const dispatch = useDispatch();

  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);

  const toggleStatus = () => {
    setShowStatus(!showStatus);
  };

  return (
    <div className="userLogin-sidebar">
      <div className="userLogin-sidebarContent">
        <div className="userDetails-img"></div>
        <div className="userLogin-welcome">
          <p>Welcome</p>
          <span>{props.inputValue}</span>
        </div>
        {jobStatus === 'green' ? (
          <UserStatus
            setShowStatus={toggleStatus}
            iconClass={'far fa-check-circle big-circle green'}
            color={'green'}
            paragraph={'I’m actively looking for a job'}
          />
        ) : jobStatus === 'blue' ? (
          <UserStatus
            setShowStatus={toggleStatus}
            iconClass={'far fa-envelope big-circle'}
            color={'blue'}
            paragraph={'Open for proposals'}
          />
        ) : (
          <UserStatus
            setShowStatus={toggleStatus}
            iconClass={'fas fa-times-circle big-circle'}
            color={'red'}
            paragraph={'Not open for proposals'}
          />
        )}
        <div
          className={
            showStatus
              ? 'userLogin-jobStatusChanger'
              : 'userLogin-jobStatusChanger display-none'
          }
        >
          <ul>
            <ListItem
              toggleStatus={toggleStatus}
              setJobStatus={setJobStatus}
              color={'green'}
              text={'I’m actively looking for a job'}
            />

            <ListItem
              toggleStatus={toggleStatus}
              setJobStatus={setJobStatus}
              color={'blue'}
              text={'Open for proposals'}
            />

            <ListItem
              toggleStatus={toggleStatus}
              setJobStatus={setJobStatus}
              color={'red'}
              text={'Not open for proposals'}
            />
          </ul>
        </div>
        <div className="userLogin-Options">
          <LinkItem
            link={'/devs/panel/profile'}
            iconClass={'far fa-user'}
            paragraph={'My profile'}
            active={props.active}
            linkId={1}
          />

          <LinkItem
            link={'/devs/panel/matchmaking'}
            iconClass={'fas fa-inbox'}
            paragraph={'Matchmaking'}
            active={props.active}
            linkId={2}
          />

          <LinkItem
            link={'/devs/panel/preferences'}
            iconClass={'fas fa-pen'}
            paragraph={'Preferences'}
            active={props.active}
            linkId={3}
          />
          <LinkItem
            link={'/devs/panel/settings'}
            iconClass={'fas fa-cog'}
            paragraph={'Settings'}
            active={props.active}
            linkId={4}
          />

          <LinkItem
            link={'/devs/'}
            iconClass={'fas fa-power-off'}
            paragraph={'Log out'}
            loginActive={() => dispatch(logged())}
            linkId={5}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
