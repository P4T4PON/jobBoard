import React, { Fragment } from 'react';
import BackDrop from '../backdrop/Backdrop';
import './SideDrawer.css';
import SideLink from './SideLink';
import { sideLink } from '../../../constans';
import { useSelector } from 'react-redux';
import NightMode from '../jobOffers/NightMode';

const SideDrawer = props => {
  const isDay = useSelector(state => state.isDay);

  const renderBackdrop = () => {
    if (props.menu_active) {
      return <BackDrop toggleMenu={props.toggleMenu} />;
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
      {' '}
      {renderBackdrop()}
      <nav
        className={
          isDay
            ? `side-drawer ${props.menu_active ? 'open' : null}`
            : `side-drawer side-drawerNightMode ${
                props.menu_active ? 'open' : null
              }`
        }
      >
        <h1>justjoin.it</h1>
        <div className="input-laneCenterer">
          <div className="input-line"></div>
        </div>
        <ul>
          <SideLink
            link={'/users/sign_in'}
            iconClass={'fas fa-suitcase'}
            text={'Employer Panel'}
          />
          {renderSideLinks()}
        </ul>
        <NightMode noIcon={true} />
      </nav>
    </Fragment>
  );
};

export default SideDrawer;
