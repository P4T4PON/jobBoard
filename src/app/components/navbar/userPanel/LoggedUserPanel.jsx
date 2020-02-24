import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { logged } from '../../../actions/index';
import UserPanel from './UserPanel';
import UserPanelLink from './UserPanelLink';

const LoggedUserPanel = () => {
  const [brands, setBrands] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);

  const dispatch = useDispatch();
  return (
    <Fragment>
      <UserPanel
        setUserPanel_active={() => setUserPanel_active(!userPanel_active)}
      />
      <div
        className={
          userPanel_active
            ? 'userPanel-sidebar'
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