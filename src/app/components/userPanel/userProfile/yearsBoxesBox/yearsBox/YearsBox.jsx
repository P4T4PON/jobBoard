import React from 'react';

const YearsBox = ({ paragraph, boxId, toggleActive, active, isDay }) => {
  return (
    <div
      className={
        boxId === active && isDay === false
          ? 'yearsBox yearsBoxNightMode border-pink color-pink'
          : boxId === active && isDay
            ? 'yearsBox border-pink color-pink'
            : isDay
              ? 'yearsBox'
              : 'yearsBox yearsBoxNightMode'
      }
      onClick={toggleActive}
    >
      <p>{paragraph}</p>
      <b>YEARS</b>
    </div>
  );
};

export default YearsBox;
