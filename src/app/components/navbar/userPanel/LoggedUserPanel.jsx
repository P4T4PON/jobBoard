import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { logged } from '../../../actions/index';
import UserPanel from './UserPanel';
import UserPanelLink from './UserPanelLink';

const LoggedUserPanel = ({ isDay }) => {
  //  nieuzywasz tutaj nigdzie brands
  const [brands, setBrands] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);

  const dispatch = useDispatch();
  return (
    <Fragment>
      <UserPanel
        isDay={isDay}
        setUserPanel_active={() => setUserPanel_active(!userPanel_active)}
      />
      <div
        className={
          userPanel_active && isDay
            ? 'userPanel-sidebar'
            : userPanel_active && isDay === false
            ? 'userPanel-sidebar userPanel-sidebarNightMode'
            : 'userPanel-sidebar display-none'
        }
      >
        <UserPanelLink
          link={'/devs/panel/profile'}
          setUserPanel_active={() => {
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'far fa-user'}
          paragraph={'My profile'}
        />
        <UserPanelLink
          link={'/devs/panel/settings'}
          setUserPanel_active={() => {
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'fas fa-cog'}
          paragraph={'Settings'}
        />
        <UserPanelLink
          link={'/'}
          setUserPanel_active={() => {
            dispatch(logged());
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'fas fa-power-off'}
          paragraph={'Log out'}
        />
      </div>
    </Fragment>
  );
};

export default LoggedUserPanel;
