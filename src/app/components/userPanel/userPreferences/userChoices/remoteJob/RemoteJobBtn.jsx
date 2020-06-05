import React from 'react';

const RemoteJobBtn = ({ remoteActive, remoteJob, toggleRemoteActive, text, className, isDay }) => {
  return (
    <div
      className={
        remoteJob === text && isDay
          ? `jobStatusButton border-pink ${className}`
          : remoteJob === text && isDay === false
            ? `jobStatusButton jobStatusButtonNightMode border-pink ${className}`
            : isDay === false
              ? `jobStatusButton jobStatusButtonNightMode ${className}`
              : `jobStatusButton ${className}`
      }
      onClick={toggleRemoteActive}
    >
      {text}
    </div>
  );
};

export default RemoteJobBtn;
