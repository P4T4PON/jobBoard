import React from 'react';

const SideLink = ({
  link,
  setContact,
  iconClass,
  text
}) => {
  return (
    <a href={link} target={link !== '/users/sign_in' ? 'blanc' : null}>
      <li onClick={setContact}>
        <i className={iconClass} />
        {text}
      </li>
    </a>
  );
};

export default SideLink;
