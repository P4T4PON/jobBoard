import React from 'react';

const Replies = ({ toggleActive, text, side, repId, active, isDay }) => {
  return (
    <div
      className={
        repId === active && isDay
          ? `userMachmakingItem repliedActive ${side} `
          : repId === active && isDay === false
            ? `userMachmakingItem userMachmakingItemNightMode repliedActive ${side} `
            : isDay === false
              ? `userMachmakingItem userMachmakingItemNightMode ${side} `
              : `userMachmakingItem ${side}`
      }
      onClick={toggleActive}
    >
      {text}
    </div>
  );
};

export default Replies;
