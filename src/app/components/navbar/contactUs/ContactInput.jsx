import React from 'react';

const ContactInput = ({
  id,
  value,
  toggleInput,
  span,
  iconClass,
  activeInput
}) => {
  return (
    <div className="input brands-i">
      {/*  niesamowicie skomplikowany łańcuszek tylko do zmiany klasy o.O*/}
      <i
        className={
          activeInput === false && value === ''
            ? iconClass
            : value != ''
            ? iconClass
            : id === 'phone'
            ? iconClass
            : activeInput && value === ''
            ? `${iconClass} icon-error`
            : null
        }
      />
      <div
        className={
          activeInput === false && value === ''
            ? 'form'
            : value != ''
            ? 'form'
            : id === 'phone'
            ? 'form'
            : 'form formError'
        }
        id={id}
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
              activeInput === false && value === ''
                ? 'content-name'
                : value != ''
                ? 'content-name'
                : id === 'phone'
                ? 'content-name'
                : 'content-name content-nameError'
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
