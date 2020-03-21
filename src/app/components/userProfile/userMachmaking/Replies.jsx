import React from 'react';

const Replies = ({ toggleActive, text, side, repId, active, isDay }) => {
  return (
    <div
      className={
        repId === active && isDay
          ? `userMachmaking-item replied-active ${side} `
          : repId === active && isDay === false
          ? `userMachmaking-item userMachmaking-itemNightMode replied-active ${side} `
          : isDay === false
          ? `userMachmaking-item userMachmaking-itemNightMode ${side} `
          : `userMachmaking-item ${side}`
      }
      onClick={toggleActive}
    >
      {text}
    </div>
  );
};

export default Replies;
