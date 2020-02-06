import React from 'react';
//TODO: destrukturyzacja porpsów
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
