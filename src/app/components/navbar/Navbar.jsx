import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideDrawer from '../sideDrawer/SideDrawer';
import ContactUs from './contactUs/ContactUs';
import Roads from '../navbar/roads/Roads';
import './Navbar.css';
import UserPanelBox from './userPanel/UserPanelBox';
import { test } from '../../actions/index';

const Navbar = () => {
  const isDay = useSelector(state => state.isDay);
  const isTest = useSelector(state => state.isTest);
  const dispatch = useDispatch();

  const [menu_active, setMenu_active] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  const toggleMenu = () => {
    setMenu_active(!menu_active);
  };

  const onBrandsChange = newBrands => {
    setBrands(newBrands);
  };

  const onContactChange = newContact => {
    setContactUs(newContact);
  };

  const toggleTest = () => {
    if (isTest === true) {
      document.getElementById('body').className = 'overflow-hidden';
    } else if (isTest === false) {
      document.getElementById('body').className = 'overflow-visible';
    }
  };

  return (
    <div className={isDay ? 'navbar' : 'navbar navbarNightMode'}>
      <Roads brands={brands} changeBrands={onBrandsChange} isDay={isDay} />

      <div className="spacer" />
      <UserPanelBox
        newBrands={brands}
        changeContact={onContactChange}
        isDay={isDay}
      />

      <div
        className="bars hov"
        onClick={() => setMenu_active(!menu_active)}
        onMouseUp={toggleTest}
        onMouseDown={() => dispatch(test())}
      >
        <i className="fas fa-bars" />
      </div>

      <SideDrawer menu_active={menu_active} toggleMenu={toggleMenu} />

      <ContactUs newContactUs={contactUs} />

      {contactUs ? (
        <div
          className="backdrop"
          onClick={() => {
            setContactUs(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
