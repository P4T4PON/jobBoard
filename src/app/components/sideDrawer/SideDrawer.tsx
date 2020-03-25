import React, { Fragment, ReactElement } from 'react';
import BackDrop from '../backdrop/Backdrop';
import './SideDrawer.css';
import SideLink from './SideLink';
import { sideLink } from '../../../constans';
import { useSelector } from 'react-redux';
import NightMode from '../jobOffers/NightMode';

interface SideDrawerProps {
  menu_active: boolean;
  toggleMenu: boolean;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ menu_active, toggleMenu }: SideDrawerProps): ReactElement => {
  const isDay = useSelector<any, any>(state => state.isDay);

  const renderBackdrop = () => {
    if (menu_active) {
      return <BackDrop toggleMenu={toggleMenu} />;
    }
  };

  const renderSideLinks = () => {
    return sideLink.map((link: string[], index: number) => (
      //  todo: tutaj Ci IDE daje pewną wskazówkę jak najedziesz na komponent... ;)
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
      <nav
        className={
          isDay
            ? `sideDrawer ${menu_active ? 'open' : null}`
            : `sideDrawer sideDrawerNightMode ${menu_active ? 'open' : null}`
        }
      >
        <h1>justjoin.it</h1>
        <div className="inputLaneCenterer">
          <div className="inputLine" />
        </div>
        <ul>
          <SideLink
            link={'/users/sign_in'}
            iconClass={'fas fa-suitcase'}
            text={'Employer Panel'}
          />
          {renderSideLinks()}
        </ul>
        <NightMode noIcon={true} showOtherCities setShowOtherCities />
      </nav>
    </Fragment>
  );
};

export default SideDrawer;
