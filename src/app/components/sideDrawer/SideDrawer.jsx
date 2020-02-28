import React, { useState, Fragment } from 'react';
import BackDrop from '../backdrop/Backdrop';
import './SideDrawer.css';
import SideLink from './SideLink';
import { contactInfo, sideLink } from '../../../constans';

const SideDrawer = ({ toggleMenu, menu_active }) => {
  const [contact, setContact] = useState(false);

  let renderContactInfo = () => {
    return contactInfo.map((contact, index) => <p key={index}>{contact}</p>);
  };

  const renderBackdrop = () => {
    if (menu_active) {
      return <BackDrop toggleMenu={toggleMenu} />;
    }
  };

  const renderSideLinks = () => {
    return sideLink.map((link, index) => (
      <SideLink
        link={link[0]}
        target={'blanc'}
        iconClass={link[1]}
        text={link[2]}
        key={index}
      />
    ));
  };

  return (
    <Fragment>
      {renderBackdrop()}
      <nav className={`side-drawer ${menu_active ? 'open' : null}`}>
        <h1>justjoin.it</h1>
        <ul>
          <SideLink
            link={'/users/sign_in'}
            iconClass={'fas fa-suitcase'}
            text={'Employer Panel'}
          />
          {renderSideLinks()}
          <SideLink
            iconClass={'fas fa-envelope'}
            text={'Contact Info'}
            setContact={() => setContact(!contact)}
          />
        </ul>
        <div className={contact ? 'contact-info' : 'contact-info display-none'}>
          {renderContactInfo()}
        </div>
      </nav>
    </Fragment>
  );
};

export default SideDrawer;
