import React from 'react';
import { Link } from 'react-router-dom';
import NavLinkItem from './navLinkItem/NavLinkItem'

const NavLink = ({ isLogged, toggleActive, link, active, iconClass, text, linkId, changeBrands }) => {
  return (
    <Link
      to={isLogged && linkId === 2 ? '/panel/matchmaking' : link}
      onClick={() => toggleActive(linkId)}
      onMouseUp={() => changeBrands(linkId === 1 ? true : false)}
      style={{ order: `${linkId === 2 && linkId}` }}
    >
      <NavLinkItem active={active} linkId={linkId} iconClass={iconClass} text={text} />
    </Link>
  );
};

export default NavLink;
