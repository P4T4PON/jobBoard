import React, { MouseEventHandler } from 'react';

interface Props {
  link: string;
  target?: string;
  setContact?: MouseEventHandler;
  iconClass: string;
  text: string;
}

const SideLink: React.FC<Props> = ({
  link,
  target,
  setContact,
  iconClass,
  text
}) => {
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
