import React, { Fragment } from 'react';
import BackDrop from '../../backdrop/Backdrop';
import './SideDrawer.css';
import SideLink from './sideLink/SideLink';
import { sideLinks } from '../../../../constans';
import { useSelector } from 'react-redux';
import NightMode from '../../jobOffers/nightMode/NightMode';
import InputLine from './inputLine/InputLine'

const SideDrawer = (menu_active, toggleMenu) => {
  const isDay = useSelector(state => state.isDay);
  const isTest = useSelector(state => state.isTest);

  const renderBackdrop = () => {
    if (isTest) {
      return <BackDrop toggleMenu={toggleMenu} menu_active={menu_active} />;
    }
  };

  const renderSideLinks = () => {
    return sideLinks.map((link, index) => (
      <SideLink
        link={link.link}
        iconClass={link.iconClass}
        text={link.text}
        key={index}
      />
    ));
  };

  return (
    <Fragment>
      {renderBackdrop()}
      <div
        className={
          isDay
            ? `sideDrawer ${isTest && 'open'}`
            : `sideDrawer sideDrawerNightMode ${isTest && 'open'}`
        }
      >
        <h1>justjoin.it</h1>
        <InputLine />
        <ul>
          {renderSideLinks()}
        </ul>
        <NightMode noIcon={true} showOtherCities setShowOtherCities />
      </div>
    </Fragment>
  );
};

export default SideDrawer;
