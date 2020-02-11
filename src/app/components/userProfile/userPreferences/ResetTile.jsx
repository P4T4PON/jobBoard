import React from 'react';

const ResetTile = ({ companyActive, companyIcon, companySpan }) => {
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
