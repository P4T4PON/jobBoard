import React, { Fragment } from 'react';

const Input = props => {
  return (
    <Fragment>
      <div className="inputStatus" id={props.id}></div>
      <input
        value={props.skill}
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        autoComplete="off"
        onChange={props.foo}
      />
    </Fragment>
  );
};

export default Input;
