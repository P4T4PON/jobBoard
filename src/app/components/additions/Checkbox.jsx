import React from 'react';

const Checkbox = ({ className, inputClass, paragraph }) => {
  return (
    <div className={className}>
      <input type="checkbox" className={inputClass}></input>
      <p>{paragraph}</p>
    </div>
  );
};

export default Checkbox;
