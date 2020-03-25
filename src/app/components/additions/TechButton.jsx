import React from 'react';
import { Link } from 'react-router-dom';

const TechButton = ({
  iconColor,
  toggleActive,
  active,
  techId,
  paragraph,
  iconClass,
  allTechnologies,
  isDay
}) => {
  return (
    <Link to='/' className={isDay ? "cityLink" : 'cityLink cityLinkNightMode'}>
      <div className="tech-buttonBox">
        <div
          className={
            allTechnologies || techId === active
              ? `tech-button icon-self ${iconColor} bg-poz0`
              : `tech-button icon-self ${iconColor} bg-poz0 unAct`
          }
          onClick={toggleActive}
        >
          <i className={iconClass}></i>
        </div>
        <div className="centerNote">
          <p>{paragraph}</p>
        </div>
      </div>
    </Link>
  );
};

export default TechButton;
