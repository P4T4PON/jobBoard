import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//TODO: dekonstrukcja propsów
const LinkButton = props => {
  return (
    <div className={props.divClass}>
      <Link to={props.link}>
        <div className={props.className}>
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
