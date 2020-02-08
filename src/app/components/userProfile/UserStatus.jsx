import React from 'react';

const UserStatus = ({ color, setShowStatus, iconClass, paragraph }) => {
  return (
    <div
      className={`userLogin-jobStatus ${color} bg-${color}`}
      onClick={setShowStatus}
    >
      <i className={iconClass}></i>
      <p>{paragraph}</p>
      <i className={`fas fa-chevron-down small-chew ${color}`}></i>
    </div>
  );
};

export default UserStatus;
