import React from 'react';

const MachmakingHref = ({ paragraph, color, className }) => {
  return (
    <a href="/panel/matchmaking" className="mediaItem">
      <i className={`mediaIcon color${color} ${className}`}></i>
      <p>{paragraph}</p>
    </a>
  );
};

export default MachmakingHref;
