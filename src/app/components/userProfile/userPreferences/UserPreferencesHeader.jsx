import React from 'react';

const UserPreferencesHeader = ({ heading, iconClass, title, paragraph }) => {
  return (
    <header className="preferences-header">
      <div className={heading}>
        <i className={iconClass} />
        <h2>{title}</h2>
      </div>
      <p>{paragraph}</p>
    </header>
  );
};

export default UserPreferencesHeader;
