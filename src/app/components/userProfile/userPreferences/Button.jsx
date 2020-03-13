import React from 'react';

const Button = ({ active, toggleTile, companyIcon, companySpan }) => {
  return (
    <div className="btn-icon">
      <div
        className={
          active
            ? 'jobStatus-button border-pink'
            : 'jobStatus-button jobStatus-border'
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
