import React from 'react';

const ResetButton = ({ companyActive, companySpan }) => {
  return (
    <div
      className={
        companyActive ? 'jobStatus-button ' : 'jobStatus-button border-pink '
      }
    >
      <span>{companySpan}</span>
    </div>
  );
};

export default ResetButton;
