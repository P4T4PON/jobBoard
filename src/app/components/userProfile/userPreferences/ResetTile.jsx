import React from 'react';
//TODO: destrukturyzacja propsow
const ResetTile = props => {
  return (
    <div
      className={
        props.CompanyActive
          ? 'jobStatus-change company '
          : 'jobStatus-change company border-pink '
      }
    >
      <i className={props.CompanyIcon}></i>
      <span>{props.CompanySpan}</span>
    </div>
  );
};

export default ResetTile;
