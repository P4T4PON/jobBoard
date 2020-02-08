import React from 'react';

const submitButton = props => {
  return (
    <div className={props.divClass}>
      <input
        type={'submit'}
        value={props.value}
        className={props.className}
        onClick={props.submit}
      />
    </div>
  );
};

export default submitButton;
