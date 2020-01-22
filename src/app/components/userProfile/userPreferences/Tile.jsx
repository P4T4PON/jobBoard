import React, { useState } from 'react';

import './Tile.css';

const Tile = props => {
  const [active, setActive] = useState(false);

  if (!props.CompanyActive && active) {
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
      <i className={props.CompanyIcon}></i>
      <span>{props.CompanySpan}</span>
    </div>
  );
};

export default Tile;
