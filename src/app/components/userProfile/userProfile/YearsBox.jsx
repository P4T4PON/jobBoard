import React from 'react';

const YearsBox = ({ paragraph, boxId, toggleActive, active }) => {
  return (
    <div
      className={
        boxId === active ? 'years-box border-pink color-pink' : 'years-box'
      }
      onClick={toggleActive}
    >
      <p>{paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
