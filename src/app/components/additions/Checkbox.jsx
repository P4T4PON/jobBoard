import React from 'react';

const Checkbox = props => {
  return (
    <div className={props.className}>
      <input type="checkbox" className={props.inputClass}></input>
      <p>{props.paragraph}</p>
    </div>
  );
};

export default Checkbox;
