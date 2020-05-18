import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = ({ className, paragraph, children, title }) => {
  const isDay = useSelector(state => state.isDay);
  return (
    <div className="userDetails">
      <div className={isDay
        ? `${className}-content`
        : `${className}-content ${className}-contentNightMode`}>
        <h3>{title}</h3>
        <p>{paragraph}</p>
        {children}
      </div>
    </div>
  );
};

export default UserDetails;
