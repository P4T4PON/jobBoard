import React from 'react';

export const JobStatus = ({
  icon,
  span1,
  span2,
  jobStatusId,
  jobStatusActive,
  setJobStatusActive,
  isDay
}) => {
  return (
    <div
      className={
        jobStatusId === jobStatusActive && isDay
          ? 'jobStatus-change border-pink mr-20'
          : jobStatusId === jobStatusActive && isDay === false
          ? 'jobStatus-change  border-pink mr-20'
          : isDay === false
          ? 'jobStatus-change jobStatus-changeNightMode mr-20'
          : 'jobStatus-change mr-20'
      }
      onClick={setJobStatusActive}
    >
      <i className={icon}></i>
      <span>
        {span1}
        <br></br>
        {span2}
      </span>
    </div>
  );
};
