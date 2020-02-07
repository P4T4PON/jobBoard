import React from 'react';
//TODO: dekonstrukcja propsów, nazwy komponentów ZAWSZE piszemy zaczynając od wielkiej litery
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
