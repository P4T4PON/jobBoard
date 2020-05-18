import React, { useState, Fragment } from 'react';
import UserPanel from '../../UserPanel';
import LoggedUserPanel from './LoggedUserPanel/LoggedUserPanel'

const LoginUserPanel = ({ isDay }) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(false)
  }

  return (
    <Fragment>
      <UserPanel
        isDay={isDay}
        toggleActive={() => setActive(!active)}
      />
      <LoggedUserPanel active={active} toggleActive={toggleActive} isDay={isDay} />
    </Fragment>
  );
};

export default LoginUserPanel;
