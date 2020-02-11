import React, { useState } from 'react';

<<<<<<< HEAD
const Button = ({ companyActive, companyIcon, companySpan }) => {
  const [active, setActive] = useState(false);

  if (!companyActive && active) {
=======
//TODO: destrukturyzacja propsów
const Button = props => {
  const [active, setActive] = useState(false);
  if (!props.CompanyActive && active) {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
    setActive(false);
  }

  return (
    <div
      className={active ? 'jobStatus-button border-pink' : 'jobStatus-button'}
      onClick={() => setActive(!active)}
    >
      {companyIcon ? <i className={companyIcon}></i> : null}
      <span>{companySpan}</span>
    </div>
  );
};

export default Button;
