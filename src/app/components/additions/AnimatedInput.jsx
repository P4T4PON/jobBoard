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
  span,
  spanClass,
  insideIcon,
  isDay,
  error,
  companyOffer
}) => {
  return (
    <div className="passwordChangeInput">
      {iconClass && <div className={divClass}>
        <i className={iconClass} />
      </div>}

      <div className={className ? className : 'cont inpont'}>
        <div className={span === 'Email' ? 'pointerEventsNone' : null}>
          <input
            type={type ? type : 'text'}
            name={name ? name : 'name'}
            autoComplete="off"
            required
            spellCheck="false"
            value={value && value}
            onChange={checkInputLength}
            onBlur={checkInputBlurLength}
            className={isDay === false ? 'inputNightMode' : null}
          />
          <label htmlFor="email" className="labelName">
            <span className={isDay === false ? `contentName ${spanClass} inputNightMode` : `contentName ${spanClass}`} >{span}</span>
            {insideIcon && <i className={`${insideIcon} inside-icon`} />}
          </label>
        </div>
        {name === 'name' && value === '' || name === 'surname' && value === '' || name === 'linkedin' && value === '' ?
          <p className={'requiredAlert'}>
            Field required to 1-click apply
          <i className="fas fa-exclamation-triangle" />
          </p>
          : null
        }
        <div className="userProfileError">{error}</div>
      </div>
    </div>
  );
};

export default AnimatedInput;
