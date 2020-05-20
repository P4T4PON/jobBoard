import React from 'react';

const Button = ({ active, toggleTile, companyIcon, companySpan, isDay }) => {
  return (
    <div className="btnIcon">
      <div
        className={
          active
            ? 'jobStatusButton border-pink'
            : isDay === false
              ? 'jobStatusButton jobStatusButtonNightMode'
              : 'jobStatusButton'
        }
        onClick={toggleTile}
      >
        {companyIcon ? <i className={companyIcon} /> : null}
        <span>{companySpan}</span>
      </div>
    </div>
  );
};

export default Button;
