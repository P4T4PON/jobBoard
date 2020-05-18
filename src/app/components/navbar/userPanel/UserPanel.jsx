import React from 'react';
const UserPanel = ({ toggleActive, isDay }) => {
  return (
    <div className={isDay ? 'userPanel' : 'userPanel userPanelNightMode'}>
      <div className="userPanelContent" onClick={toggleActive}>
        <div className="userPhoto" />
        <div className="userName">TestUser</div>
        <i className="fas fa-chevron-down" />
      </div>
    </div>
  );
};

export default UserPanel;
