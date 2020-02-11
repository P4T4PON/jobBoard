import React from 'react';

const TechButton = ({ iconColor, focusTechnology, paragraph, iconClass }) => {
  return (
    <div className="tech-buttonBox">
      <div
        className={`tech-button icon-self ${iconColor} bg-poz0`}
        onClick={focusTechnology}
      >
        <i className={iconClass}></i>
      </div>
      <div className="centerNote">
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default TechButton;
