import React from 'react';

const Tile = ({ companyIcon, companySpan, toggleTile, active, isDay }) => {
  return (
    <div
      className={
        active
          ? 'jobStatusChange company mr-20 border-pink'
          : isDay === false
            ? 'jobStatusChange jobStatusChangeNightMode company mr-20'
            : 'jobStatusChange company mr-20'
      }
      onClick={toggleTile}
    >
      <i className={companyIcon}></i>
      <span>{companySpan}</span>
    </div>
  );
};

export default Tile;
