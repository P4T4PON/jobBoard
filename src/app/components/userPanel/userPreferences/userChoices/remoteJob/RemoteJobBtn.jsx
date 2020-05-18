import React from 'react';

const RemoteJobBtn = ({ remoteActive, remoteJob, toggleRemoteActive, text, className, isDay }) => {
  return (
    <div
      className={
        remoteJob === text && isDay
          ? `jobStatus-button border-pink ${className}`
          : remoteJob === text && isDay === false
            ? `jobStatus-button jobStatus-buttonNightMode border-pink ${className}`
            : isDay === false
              ? `jobStatus-button jobStatus-buttonNightMode ${className}`
              : `jobStatus-button ${className}`
      }
      onClick={toggleRemoteActive}
    >
      {text}
    </div>
  );
};

export default RemoteJobBtn;
