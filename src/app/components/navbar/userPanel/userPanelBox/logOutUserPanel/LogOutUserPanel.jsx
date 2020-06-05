import React, { useState, Fragment } from 'react';
import NavButton from '../navButton/NavButton';
import AnonUserPanel from './anonUserPanel/AnonUserPanel'
import { useSelector } from 'react-redux';

const LogOutUserPanel = () => {
  const isDay = useSelector(state => state.isDay);
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(false)
  }
  return (
    <Fragment>
      <NavButton
        className={'bgPurple'}
        flipValue={() => setActive(!active)}
        text={'Sign in'}
      />
      <AnonUserPanel active={active} isDay={isDay} toggleActive={toggleActive} />
    </Fragment>
  );
};

export default LogOutUserPanel;
