import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import LoggedUserPanel from './LoggedUserPanel';
import LogOutUserPanel from './LogOutUserPanel';
import NavButton from '../NavButton';
import LinkButton from '../../additions/LinkButton';

const UserPanelBox = ({ newBrands, changeContact, isDay }) => {
  const [contactUs] = useState(false);

  const isLogged = useSelector(state => state.isLogged);

  const onChangeContact = () => {
    changeContact(!contactUs);
  };

  return (
    <Fragment>
      <div className="nav-right">
        {newBrands ? (
          <NavButton
            className={'bg-pink'}
            fooOnClick={onChangeContact}
            text={'Get Started'}
          />
        ) : (
          <LinkButton
            link={'/add-offer'}
            className={'roundedBtn bg-pink'}
            text={'Post a Job'}
          />
        )}

        {isLogged ? <LoggedUserPanel isDay={isDay} /> : <LogOutUserPanel />}
      </div>
    </Fragment>
  );
};

export default UserPanelBox;
