import React, { useState } from 'react';

const Tile = ({ companyIcon, companySpan, toggleTile, active, isDay }) => {
  return (
    <div
      className={
        active
          ? 'jobStatus-change company mr-20 border-pink'
          : isDay === false
          ? 'jobStatus-change jobStatus-changeNightMode company mr-20'
          : 'jobStatus-change company mr-20'
      }
      onClick={toggleTile}
    >
      <i className={companyIcon}></i>
      <span>{companySpan}</span>
    </div>
  );
};

export default Tile;
