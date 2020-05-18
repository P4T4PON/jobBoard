import React from 'react';
import { useSelector } from 'react-redux';

const SpecBox = ({ companyLink, linkText, typeText, iconClass, iconColor }) => {
  const isDay = useSelector(state => state.isDay);
  return (
    <div className={isDay ? "offerSpec" : 'offerSpec offerSpecNightMode'}>

      <div className={isDay ? `specIcon ${iconColor}` : `specIcon ${iconColor} specIconNightMode`}>
        <i className={iconClass} />
      </div>

      {companyLink ? (
        <a href={companyLink} target="blanc">
          {linkText}
        </a>
      ) : (
          <div className="offetText">{linkText}</div>
        )}

      <div className="offerType">{typeText}</div>

    </div>
  );
};

export default SpecBox;
