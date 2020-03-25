import React from 'react';

const ContactInput = ({
  value,
  toggleInput,
  span,
  iconClass,
  activeInput
}) => {
  return (
    <div className="input brands-i">
      <i
        className={
          activeInput && value === '' ? `${iconClass} icon-error` : iconClass
        }
      />
      <div
        className={
          activeInput && value === '' ? 'form formError' : 'form'
        }
      >
        <input
          type="text"
          name={'name'}
          autoComplete="off"
          value={value}
          required
          onChange={toggleInput}
        />
        <label htmlFor="name" className="label-name">
          <span
            className={
              activeInput && value === '' ? 'content-name content-nameError' : 'content-name'
            }
          >
            {span}
          </span>
        </label>
      </div>
    </div>
  );
};

export default ContactInput;
