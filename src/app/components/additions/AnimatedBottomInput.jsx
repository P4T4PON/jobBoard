import React from 'react';

const AnimatedBottomInput = ({ iconClass, type, span }) => {
  return (
    <div className="input">
      <i className={iconClass} />
      <div className="form">
        <input type={type} name="name" autoComplete="off" required />
        <label htmlFor="name" className="labelName">
          <span className="contentName">{span}</span>
        </label>
      </div>
    </div>
  );
};

export default AnimatedBottomInput;
