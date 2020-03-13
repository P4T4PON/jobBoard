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
          : `jobStatus-button jobStatus-border ${className}`
      }
      onClick={setRemoteActive}
    >
      <span>{text}</span>
    </div>
  );
};

export default RemoteJobBtn;
