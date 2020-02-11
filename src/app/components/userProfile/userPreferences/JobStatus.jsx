import React from 'react';

export const JobStatus = ({ icon, span1, span2 }) => {
  return (
    <div className="jobStatus-change">
      <i className={icon}></i>
      <span>
        {span1}
        <br></br>
        {span2}
      </span>
    </div>
  );
};
