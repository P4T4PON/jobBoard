import React from 'react';

const Tile = ({ companyIcon, companySpan, toggleTile, active }) => {
  return (
    <div
      className={
        active
          ? 'jobStatus-change company mr-20 border-pink'
          : 'jobStatus-change company jobStatus-border'
      }
      onClick={toggleTile}
    >
      <i className={companyIcon} />
      <span>{companySpan}</span>
    </div>
  );
};

export default Tile;
