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
  span
}) => {
  return (
    <Fragment>
      <div>
        <i className={`${iconClass} login-icon`}></i>
      </div>
      <div className="cont">
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
          <div className="password-shower" onClick={toggleInput}>
            <i className="fas fa-eye"></i>
          </div>
        ) : null}
      </div>
      <div className="error">{error}</div>
    </Fragment>
  );
};

export default MatchmakingInput;
