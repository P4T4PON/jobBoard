import React from 'react';

export const JobStatus = ({ icon, upperText, downText, toggleStatus, userStatus, color, isDay }) => {
  return (
    <div
      className={
        userStatus === color && isDay
          ? 'jobStatus-change border-pink mr-20'
          : userStatus === color && isDay === false
            ? 'jobStatus-change  border-pink mr-20'
            : isDay === false
              ? 'jobStatus-change jobStatus-changeNightMode mr-20'
              : 'jobStatus-change mr-20'
      }
      onClick={toggleStatus}
    >
      <i className={icon} />
      <span>
        {upperText}
        <br></br>
        {downText}
      </span>
    </div>
  );
};

export default JobStatus