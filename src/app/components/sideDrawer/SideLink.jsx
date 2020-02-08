import React from 'react';

const SideLink = ({ link, target, setContact, iconClass, text }) => {
  return (
    <a href={link} target={target}>
      <li onClick={setContact}>
        <i className={iconClass}></i>
        {text}
      </li>
    </a>
  );
};

export default SideLink;
