import React from 'react';

const SpecBox = ({ companyLink, linkText, typeText, iconClass, iconColor }) => {
  return (
    <div className="offer-spec">
      <div className={`spec-icon ${iconColor}`}>
        <i className={iconClass} />
      </div>
      {companyLink ? (
        <a href={companyLink} target="blanc">
          {linkText}
        </a>
      ) : (
        <div className="offet-text">{linkText}</div>
      )}

      <div className="offer-type">{typeText}</div>
    </div>
  );
};

export default SpecBox;
