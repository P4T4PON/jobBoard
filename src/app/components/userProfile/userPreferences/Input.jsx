import React, { Fragment } from 'react';

const Input = ({
  id,
  skill,
  name,
  placeholder,
  className,
  searchInput,
  hideInput
}) => {
  return (
    <Fragment>
      {/*  TODO: domkniecie poprawne taga*/}
      <div className="inputStatus" id={id}></div>
      <input
        value={skill}
        name={name}
        placeholder={placeholder}
        className={className}
        autoComplete="off"
        onChange={searchInput}
        onBlur={hideInput}
      />
    </Fragment>
  );
};

export default Input;
