import React, { useState } from 'react';

<<<<<<< HEAD
const Tile = ({ companyActive, companyIcon, companySpan }) => {
=======
import './Tile.css';
//TODO: destrukturyzacja propsow
const Tile = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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
