import React, { Fragment } from 'react';

const MatchmakingInput = ({
  error,
  iconClass,
  type,
  value,
  checkInputLength,
  checkInputBlurLength,
  toggleInput,
  showPassword,
  inputClass,
  span,
  isDay
}) => {
  const test = () => {
    console.log(error);
  };

  return (
    <Fragment>
      {test()}
      <div>
        <i
          className={
            isDay
              ? `${iconClass} login-icon`
              : `${iconClass} login-icon login-iconNightMode`
          }
        />
      </div>
      <div
        className={
          isDay && error !== ''
            ? 'cont inputError'
            : isDay === false && error !== ''
            ? 'cont contNightMode inputError'
            : isDay
            ? 'cont'
            : 'cont contNightMode'
        }
      >
        <div>
          <input
            type={type}
            autoComplete="off"
            required
            className={inputClass}
            value={value}
            onChange={checkInputLength}
            onBlur={checkInputBlurLength}
          />
          <label htmlFor="email" className="label-name">
            <span className="content-name">{span}</span>
          </label>
        </div>
        {showPassword ? (
          <div
            className={
              isDay
                ? 'password-shower'
                : 'password-shower password-showerNightMode'
            }
            onClick={toggleInput}
          >
            <i className="fas fa-eye" />
          </div>
        ) : null}
      </div>
      <div className="error">{error}</div>
    </Fragment>
  );
};

export default MatchmakingInput;
