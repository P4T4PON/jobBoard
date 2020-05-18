import React from 'react';

const NavButton = ({ className, flipValue, text }) => {
  return (
    <button className={className} onClick={flipValue}>
      {text}
    </button>
  );
};

export default NavButton;
