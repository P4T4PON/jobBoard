import React, { useState } from 'react';

const Tile = ({ companyActive, companyIcon, companySpan }) => {
  const [active, setActive] = useState(false);

  if (!companyActive && active) {
    setActive(false);
  }

  return (
    <div
      className={
        active
          ? 'jobStatus-change company border-pink'
          : 'jobStatus-change company'
      }
      onClick={() => setActive(!active)}
    >
      <i className={companyIcon}></i>
      <span>{companySpan}</span>
    </div>
  );
};

export default Tile;
