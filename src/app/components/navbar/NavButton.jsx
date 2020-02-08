import React from 'react';

const NavButton = props => {
  return (
    <button className={props.className} onClick={props.fooOnClick}>
      {props.text}
    </button>
  );
};

export default NavButton;
