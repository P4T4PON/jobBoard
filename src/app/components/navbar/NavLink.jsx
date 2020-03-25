import React from 'react';
import { Link } from 'react-router-dom';
const NavLink = props => {
  return (
    <Link
      to={props.isLogged ? '/devs/panel/matchmaking' : props.link}
      target={props.target}
      onClick={props.fooOnClick}
    >
      <h2 className={props.active ? 'hov txt active' : 'hov txt'}>
        <i className={props.iconClass} />
        {props.text}
      </h2>
    </Link>
  );
};

export default NavLink;
