import React, { useState } from 'react';

//TODO: destrukturyzacja propsów
const Button = props => {
  const [active, setActive] = useState(false);
  if (!props.CompanyActive && active) {
    setActive(false);
  }

  return (
    <div
      className={active ? 'jobStatus-button border-pink' : 'jobStatus-button'}
      onClick={() => setActive(!active)}
    >
      {props.CompanyIcon ? <i className={props.CompanyIcon}></i> : null}
      <span>{props.CompanySpan}</span>
    </div>
  );
};

export default Button;
