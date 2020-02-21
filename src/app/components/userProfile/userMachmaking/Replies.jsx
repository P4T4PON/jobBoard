import React from 'react';

const Replies = ({ toggleActive, text, side, repId, active }) => {
  return (
    <div
      className={
        repId === active
          ? `userMachmaking-item replied-active ${side} `
          : `userMachmaking-item ${side}`
      }
      onClick={toggleActive}
    >
      {text}
    </div>
  );
};

export default Replies;
