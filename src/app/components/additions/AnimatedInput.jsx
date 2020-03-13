import React from 'react';
const AnimatedInput = ({
  divClass,
  iconClass,
  className,
  type,
  name,
  value,
  checkInputLength,
  checkInputBlurLength,
  span
}) => {
  return (
    <div className="passwordChange-input">
      <div className={divClass}>
        <i className={iconClass} />
      </div>

      <div className={className}>
        <div>
          <input
            type={type}
            name={name}
            autoComplete="off"
            required
            spellCheck="false"
            value={value}
            onChange={checkInputLength}
            onBlur={checkInputBlurLength}
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">{span}</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default AnimatedInput;
