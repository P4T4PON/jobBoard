import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import LoggedUserPanel from './loginUserPanel/LoginUserPanel';
import LogOutUserPanel from './logOutUserPanel/LogOutUserPanel';
import NavButton from './navButton/NavButton';
import LinkButton from '../../../additions/LinkButton';


const UserPanelBox = ({ brands, changeContact, isDay }) => {
  const isLogged = useSelector(state => state.isLogged);
  const contactUs = false;

  const onChangeContact = () => {
    changeContact(!contactUs);
  };

  return (
    <Fragment>
      <div className="navRight">
        {brands && isLogged ? (
          <NavButton
            className={'bgPink'}
            flipValue={onChangeContact}
            text={'Get Started'}
          />
        ) : (
            <LinkButton
              link={'/add-offer'}
              className={'roundedBtn bgPink'}
              text={'Post a Job'}
            />
          )}
        {isLogged ? <LoggedUserPanel isDay={isDay} /> : <LogOutUserPanel />}
      </div>
    </Fragment>
  );
};

export default UserPanelBox;
