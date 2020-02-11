import React from 'react';
<<<<<<< HEAD

export const JobStatus = ({ icon, span1, span2 }) => {
=======
//TODO: destrukturyzacja propsów, nie powinno być br, a jak już to self-closing tag, czym jest span2? (zła nazwa propsa)
export const JobStatus = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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
