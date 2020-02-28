import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logged } from '../../actions/index';
import UserStatus from './UserStatus';
import LinkItem from './LinkItem';
import ListItem from './ListItem';
import { linkItem, userStatus, listItem } from '../../../constans';

const UserPanel = props => {
  const dispatch = useDispatch();

  const [jobStatus, setJobStatus] = useState('green');
  const [showStatus, setShowStatus] = useState(false);

  const toggleStatus = () => {
    setShowStatus(!showStatus);
  };

  const toggleLinkItems = () => {
    return linkItem.map((item, index) => (
      <LinkItem
        key={index}
        link={item[0]}
        iconClass={item[1]}
        paragraph={item[2]}
        active={props.active}
        loginActive={item[2] === 'Log out' ? () => dispatch(logged()) : null}
        linkId={index + 1}
      />
    ));
  };

  const toggleUserStatus = () => {
    return userStatus.map((status, index) => (
      <UserStatus
        key={index}
        setShowStatus={toggleStatus}
        iconClass={status[0]}
        color={status[1]}
        paragraph={status[2]}
      />
    ));
  };

  const toggleListItems = () => {
    return listItem.map((item, index) => (
      <ListItem
        key={index}
        toggleStatus={toggleStatus}
        setJobStatus={setJobStatus}
        color={item[0]}
        text={item[1]}
      />
    ));
  };

  return (
    <div className="userLogin-sidebar">
      <div className="userLogin-sidebarContent">
        <div className="userLogin-img"></div>
        <div className="userLogin-welcome">
          <p>Welcome</p>
          <span>{props.inputValue}</span>
        </div>
        {jobStatus === 'green'
          ? toggleUserStatus()[0]
          : jobStatus === 'blue'
          ? toggleUserStatus()[1]
          : toggleUserStatus()[2]}
        <div
          className={
            showStatus
              ? 'userLogin-jobStatusChanger'
              : 'userLogin-jobStatusChanger display-none'
          }
        >
          <ul>{toggleListItems()}</ul>
        </div>
        <div className="userLogin-Options">{toggleLinkItems()}</div>
      </div>
    </div>
  );
};

export default UserPanel;
