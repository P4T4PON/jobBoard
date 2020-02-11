import React, { Fragment } from 'react';
<<<<<<< HEAD

const Input = ({ id, skill, name, placeholder, className, searchInput }) => {
=======
//TODO: destrukturyzacja propsów
const Input = props => {
>>>>>>> 4f0708403c7b6ddc8efea0c79cfa27980e0a2800
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
