import React from 'react';
//popraw tag "i"
const AnimatedBottomInput = props => {
  return (
    <div className="input">
      <i className={props.iconClass}/>
      <div className="form">
        <input type={props.type} name="name" autoComplete="off" required />
        <label htmlFor="name" className="label-name">
          <span className="content-name">{props.span}</span>
        </label>
      </div>
    </div>
  );
};

export default AnimatedBottomInput;
