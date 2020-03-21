import React from 'react';

const YearsBox = ({ paragraph, boxId, toggleActive, active, isDay }) => {
  return (
    <div
      className={
        boxId === active && isDay === false
          ? 'years-box years-boxNightMode border-pink color-pink'
          : boxId === active && isDay
          ? 'years-box border-pink color-pink'
          : isDay
          ? 'years-box'
          : 'years-box years-boxNightMode'
      }
      onClick={toggleActive}
    >
      <p>{paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
