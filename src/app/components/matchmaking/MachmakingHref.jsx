import React from 'react';

const MachmakingHref = ({ paragraph, color, className }) => {
  return (
    <a href="" className="media-item">
      <i className={`media-icon color-${color} ${className}`}></i>
      <p>{paragraph}</p>
    </a>
  );
};

export default MachmakingHref;
