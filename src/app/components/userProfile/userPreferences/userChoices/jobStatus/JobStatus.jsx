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
          ? 'jobStatus-change border-pink'
          : 'jobStatus-change jobStatus-border'
      }
      onClick={setJobStatusActive}
    >
      <i className={icon} />
      <span>
        {span1}
        <br></br>
        {span2}
      </span>
    </div>
  );
};
