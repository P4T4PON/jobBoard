import React from 'react';

const UserChoices = ({ bool, iconClass, span, b }) => {
  return (
    <div className={bool ? '' : 'preferencesBox'}>
      <div className="preferencesItem">
        <i className={iconClass}></i>
        <div className="preferencesText">
          <b>{b}</b>
          <span>{span}</span>
        </div>
      </div>
    </div>
  );
};

export default UserChoices;
