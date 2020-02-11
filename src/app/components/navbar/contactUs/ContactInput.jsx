import React from 'react';

const ContactInput = ({
  id,
  name,
  value,
  toggleInput,
  span,
  setVariable,
  iconClass
}) => {
  return (
    <div className="input brands-i">
      <i className={iconClass}></i>
      <div className="form" id={id} onMouseDown={setVariable}>
        <input
          type="text"
          name={'name'}
          autoComplete="off"
          value={value}
          required
          onChange={toggleInput}
        />
        <label htmlFor="name" className="label-name">
          <span className="content-name">{span}</span>
        </label>
      </div>
    </div>
  );
};

export default ContactInput;
