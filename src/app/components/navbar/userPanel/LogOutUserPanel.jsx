import React, { useState, Fragment } from 'react';
import UserPanelLink from './UserPanelLink';
import NavButton from '../NavButton';

const LogOutUserPanel = () => {
  const [brands, setBrands] = useState(false);
  const [sideBar_active, setSideBar_active] = useState(false);
  return (
    <Fragment>
      <NavButton
        className={'bg-purple'}
        fooOnClick={() => {
          setSideBar_active(!sideBar_active);
          setBrands(false);
        }}
        text={'Sign in'}
      />
      <div className={sideBar_active ? 'side-bar ' : 'side-bar display-none'}>
        <UserPanelLink
          link={'/devs/'}
          setUserPanel_active={() => setSideBar_active(false)}
          iconClass={'far fa-grin pink-icon'}
          paragraph={'Sign in as a Developer'}
        />
        <UserPanelLink
          link={'/users/sign_in'}
          setUserPanel_active={() => setSideBar_active(false)}
          iconClass={'fas fa-suitcase purple-icon'}
          paragraph={'Sign in to Emlployer Panel'}
        />
      </div>
    </Fragment>
  );
};

export default LogOutUserPanel;
