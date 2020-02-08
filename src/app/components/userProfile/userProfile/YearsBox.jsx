import React from 'react';

const YearsBox = ({ paragraph, toggleActive }) => {
  return (
    <div className="years-box" onClick={toggleActive}>
      <p>{paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
