import React from 'react';

const UserPanel = ({ setUserPanel_active }) => {
  return (
    <div className="user-panel">
      <div className="userPanel-content" onClick={setUserPanel_active}>
        <div className="userPhoto"></div>
        <div className="userName">TestUser</div>
        <i className="fas fa-chevron-down" />
      </div>
    </div>
  );
};

export default UserPanel;
