import React from 'react';

const UserBox = ({ className, content }) => {
  return (
    <div className="main">
      <div className="blocker"></div>
      <div className={`card ${className}`}>
        <h1>justjoin.it</h1>
        {content}
      </div>
    </div>
  );
};

export default UserBox;
