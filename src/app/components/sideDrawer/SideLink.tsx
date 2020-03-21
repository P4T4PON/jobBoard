import React from 'react';

interface Props {
  link: string;
  target: any;
  setContact: any;
  iconClass: string;
  text: string;
}

// Type 'boolean' is not assignable to type '((event: MouseEvent<HTMLLIElement, MouseEvent>) => void) | undefined'.

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
