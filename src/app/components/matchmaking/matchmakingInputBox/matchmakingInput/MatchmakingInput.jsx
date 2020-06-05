import React, { Fragment } from 'react';
import LoginIcon from './loginIcon/LoginIcon'
import Input from './input/Input'
import PasswordShower from './passwordShower/PasswordShower'
import MatchmakingInputBox from '../MatchmakingInputBox'

const MatchmakingInput = ({
  error,
  iconClass,
  type,
  value,
  checkInputLength,
  checkInputBlurLength,
  toggleInput,
  showPassword,
  span,
  name,
  isDay
}) => {
  return (
    <Fragment>
      <LoginIcon iconClass={iconClass} isDay={isDay} />
      <MatchmakingInputBox isDay={isDay} error={error}>
        <Input type={type} name={name} isDay={isDay} value={value} checkInputLength={checkInputLength}
          checkInputBlurLength={checkInputBlurLength} span={span} />
        {showPassword && (<PasswordShower isDay={isDay} toggleInput={toggleInput} />)}
      </MatchmakingInputBox>
      <div className="error">{error}</div>
    </Fragment>
  );
};

export default MatchmakingInput;
