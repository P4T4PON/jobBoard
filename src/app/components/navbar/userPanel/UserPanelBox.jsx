import React, { useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../../actions/index';
import NavButton from '../NavButton';
import LinkButton from '../../additions/LinkButton';
import UserPanel from './UserPanel';
import UserPanelLink from './UserPanelLink';

const UserPanelBox = ({ newBrands }) => {
  const [contactUs, setContactUs] = useState(false);
  const [sideBar_active, setSideBar_active] = useState(false);
  const [brands, setBrands] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);

  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <Fragment>
      <div className="nav-right">
        {newBrands ? (
          <NavButton
            className={'bg-pink'}
            fooOnClick={() => setContactUs(true)}
            text={'Get Started'}
          />
        ) : (
          <LinkButton
            link={'/add-offer'}
            className={'roundedBtn bg-pink'}
            text={'Post a Job'}
          />
        )}

        {isLogged ? (
          <UserPanel
            setUserPanel_active={() => setUserPanel_active(!userPanel_active)}
          />
        ) : (
          <NavButton
            className={'bg-purple'}
            fooOnClick={() => {
              setSideBar_active(!sideBar_active);
              setBrands(false);
            }}
            text={'Sign in'}
          />
        )}
      </div>

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

export default UserPanelBox;
