import React from 'react';

export const JobStatus = ({
  icon,
  span1,
  span2,
  jobStatusId,
  jobStatusActive,
  setJobStatusActive
}) => {
  return (
    <div
      className={
        jobStatusId === jobStatusActive
          ? 'jobStatus-change border-pink mr-20'
          : 'jobStatus-change mr-20'
      }
      onClick={setJobStatusActive}
    >
      {/*TODO: tagi do poprawy */}
      <i className={icon}></i>
      <span>
        {span1}
        <br></br>
        {span2}
      </span>
    </div>
  );
};
