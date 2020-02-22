import React from 'react';

const TechButton = ({
  iconColor,
  toggleActive,
  active,
  techId,
  paragraph,
  iconClass,
  allTechnologies
}) => {
  return (
    <div className="tech-buttonBox">
      <div
        className={
          allTechnologies || techId === active
            ? `tech-button icon-self ${iconColor} bg-poz0`
            : `tech-button icon-self ${iconColor} bg-poz0 unAct`
        }
        onClick={toggleActive}
      >
        <i className={iconClass} />
      </div>
      <div className="centerNote">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default TechButton;
