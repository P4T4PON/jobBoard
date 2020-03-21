import React from 'react';

const Button = ({ active, toggleTile, companyIcon, companySpan, isDay }) => {
  return (
    <div className="btn-icon">
      <div
        className={
          active
            ? 'jobStatus-button border-pink'
            : isDay === false
            ? 'jobStatus-button jobStatus-buttonNightMode'
            : 'jobStatus-button'
        }
        onClick={toggleTile}
      >
        {companyIcon ? <i className={companyIcon}></i> : null}
        <span>{companySpan}</span>
      </div>
    </div>
  );
};

export default Button;
