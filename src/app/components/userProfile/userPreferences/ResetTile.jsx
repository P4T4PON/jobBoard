import React from 'react';
<<<<<<< HEAD

const ResetTile = ({ companyActive, companyIcon, companySpan }) => {
=======
//TODO: destrukturyzacja propsow
const ResetTile = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
  return (
    <div
      className={
        companyActive
          ? 'jobStatus-change company '
          : 'jobStatus-change company border-pink '
      }
    >
      <i className={companyIcon}></i>
      <span>{companySpan}</span>
    </div>
  );
};

export default ResetTile;
