import React from 'react';
//TODO: destrukturyzacja propsów, nie powinno być br, a jak już to self-closing tag, czym jest span2? (zła nazwa propsa)
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
