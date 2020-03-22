import React from 'react';

interface Props {
  link: string;
  target: any;
  setContact: any;
  iconClass: string;
  text: string;
}
//TODO: tutaj Ci typescript już sam podopowiada, że przypisujesz zły typ bo próbujesz booleana dać i dokładnie Ci pisze dlaczego, takie coś wykorzystuj jako wskazówkę a nie problem ;)
//TODO: domknij tag i chłopie :D

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
