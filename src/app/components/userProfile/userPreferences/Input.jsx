import React, { Fragment } from 'react';

const Input = ({ id, skill, name, placeholder, className, searchInput }) => {
  return (
    <Fragment>
      <div className="inputStatus" id={id}></div>
      <input
        value={skill}
        name={name}
        placeholder={placeholder}
        className={className}
        autoComplete="off"
        onChange={searchInput}
      />
    </Fragment>
  );
};

export default Input;
