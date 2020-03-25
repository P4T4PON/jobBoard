import React from 'react';
const UserPanel = ({ setUserPanel_active, isDay }) => {
  return (
    <div className={isDay ? 'user-panel' : 'user-panel user-panelNightMode'}>
      <div className="userPanel-content" onClick={setUserPanel_active}>
        <div className="userPhoto" />
        <div className="userName">TestUser</div>
        <i className="fas fa-chevron-down" />
      </div>
    </div>
  );
};

export default UserPanel;
