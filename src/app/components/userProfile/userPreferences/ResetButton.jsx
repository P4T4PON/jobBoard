import React from 'react';
<<<<<<< HEAD

const ResetButton = ({ companyActive, companySpan }) => {
=======
//TODO: destrukturyzacja porpsów
const ResetButton = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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
