import React from 'react';

const submitButton = props => {
  return (
    <div>
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
