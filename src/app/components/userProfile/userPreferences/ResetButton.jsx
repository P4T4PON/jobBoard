import React from 'react';

const ResetButton = props => {
  return (
    <div
      className={
        props.CompanyActive
          ? 'jobStatus-button '
          : 'jobStatus-button border-pink '
      }
    >
      <span>{props.CompanySpan}</span>
    </div>
  );
};

export default ResetButton;
