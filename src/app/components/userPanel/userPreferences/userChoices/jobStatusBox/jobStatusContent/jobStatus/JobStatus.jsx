import React from 'react';

export const JobStatus = ({ icon, upperText, downText, toggleStatus, userStatus, color, isDay }) => {
  return (
    <div
      className={
        userStatus === color && isDay
          ? 'jobStatusChange border-pink mr-20'
          : userStatus === color && isDay === false
            ? 'jobStatusChange  border-pink mr-20'
            : isDay === false
              ? 'jobStatusChange jobStatusChangeNightMode mr-20'
              : 'jobStatusChange mr-20'
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