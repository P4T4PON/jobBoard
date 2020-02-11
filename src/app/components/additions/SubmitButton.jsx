import React from 'react';

const submitButton = ({ divClass, value, className, submit }) => {
  return (
    <div className={divClass}>
      <input
        type={'submit'}
        value={value}
        className={className}
        onClick={submit}
      />
    </div>
  );
};

export default submitButton;
