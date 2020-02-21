import React, { useState } from 'react';

const Button = ({ companyActive, companyIcon, companySpan }) => {
  const [active, setActive] = useState(false);

  if (!companyActive && active) {
    setActive(false);
  }

  return (
    <div className="btn-icon">
      <div
        className={active ? 'jobStatus-button border-pink' : 'jobStatus-button'}
        onClick={() => setActive(!active)}
      >
        {companyIcon ? <i className={companyIcon}></i> : null}
        <span>{companySpan}</span>
      </div>
    </div>
  );
};

export default Button;
