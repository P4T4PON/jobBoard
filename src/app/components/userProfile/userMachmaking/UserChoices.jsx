import React from 'react';

const UserChoices = ({ bool, iconClass, span, b, isDay }) => {
  return (
    <div className={bool ? '' : 'preferencesBox'}>
      <div
        className={
          isDay ? 'preferencesItem' : 'preferencesItem preferencesItemNightMode'
        }
      >
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
