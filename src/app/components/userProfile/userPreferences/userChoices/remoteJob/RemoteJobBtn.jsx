import React from 'react';

const RemoteJobBtn = ({
  remoteActive,
  remoteJob,
  setRemoteActive,
  text,
  className
}) => {
  return (
    <div
      className={
        remoteJob === remoteActive
          ? `jobStatus-button border-pink ${className}`
          : `jobStatus-button ${className}`
      }
      onClick={setRemoteActive}
    >
      {text}
    </div>
  );
};

export default RemoteJobBtn;
