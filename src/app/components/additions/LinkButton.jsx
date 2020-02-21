import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ text, className, divClass, link }) => {
  return (
    <div className={divClass}>
      <Link to={link}>
        <div className={className}>
          <p>{text}</p>
        </div>
      </Link>
    </div>
  );
};

export default LinkButton;
