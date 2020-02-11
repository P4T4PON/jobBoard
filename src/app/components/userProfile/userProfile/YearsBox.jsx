import React from 'react';
<<<<<<< HEAD

const YearsBox = ({ paragraph, toggleActive }) => {
=======
//TODO: destrukturyzacja propsow, czym jest fooOnClick?
const YearsBox = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
  return (
    <div className="years-box" onClick={toggleActive}>
      <p>{paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
