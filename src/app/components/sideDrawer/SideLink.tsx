import React, { MouseEventHandler } from 'react';

interface SideLinkProps {
  link: string;
  target?: string;
  setContact?: MouseEventHandler;
  iconClass: string;
  text: string;
}

const SideLink: React.FC<SideLinkProps> = ({
  link,
  target,
  setContact,
  iconClass,
  text
}) => {
  return (
    <a href={link} target={target}>
      <li onClick={setContact}>
        <i className={iconClass} />
        {text}
      </li>
    </a>
  );
};

export default SideLink;
