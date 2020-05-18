import React from 'react';
import { useSelector } from 'react-redux';

const UserPreferencesHeader = ({ iconClass, title, paragraph, color }) => {
  const isDay = useSelector(state => state.isDay);

  return (
    <header className="preferences-header">
      <div className={isDay
        ? `preferences-heading ${color}`
        : `preferences-heading ${color} preferences-headingNightMode`}>
        <i className={iconClass}></i>
        <h2>{title}</h2>
      </div>
      <p>{paragraph}</p>
    </header>
  );
};

export default UserPreferencesHeader;
