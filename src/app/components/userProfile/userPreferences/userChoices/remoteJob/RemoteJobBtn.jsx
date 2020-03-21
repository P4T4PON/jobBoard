import React from 'react';

const RemoteJobBtn = ({
  remoteActive,
  remoteJob,
  setRemoteActive,
  text,
  className,
  isDay
}) => {
  return (
    <div
      className={
        remoteJob === remoteActive && isDay
          ? `jobStatus-button border-pink ${className}`
          : remoteJob === remoteActive && isDay === false
          ? `jobStatus-button jobStatus-buttonNightMode border-pink ${className}`
          : isDay === false
          ? `jobStatus-button jobStatus-buttonNightMode ${className}`
          : `jobStatus-button ${className}`
      }
      onClick={setRemoteActive}
    >
      {text}
    </div>
  );
};

export default RemoteJobBtn;
