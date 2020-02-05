import React from 'react';

export const JobStatus = props => {
  return (
    <div className="jobStatus-change mr-20">
      <i className={props.icon}></i>
      <span>
        {props.span1}
        <br></br>
        {props.span2}
      </span>
    </div>
  );
};
