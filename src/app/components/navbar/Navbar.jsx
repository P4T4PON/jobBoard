import React, { useState } from 'react';
import SideDrawer from '../sideDrawer/SideDrawer';
import ContactUs from './contactUs/ContactUs';
import Roads from '../navbar/roads/Roads';
import './Navbar.css';
import UserPanelBox from './userPanel/UserPanelBox';

const Navbar = () => {
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

  return (
    <div className="navbar">
      <Roads brands={brands} changeBrands={onBrandsChange} />

      <div className="spacer" />
      <UserPanelBox newBrands={brands} changeContact={onContactChange} />

      <div className="bars hov" onClick={() => setMenu_active(!menu_active)}>
        <i className="fas fa-bars mr"></i>
      </div>

      <SideDrawer menu_active={menu_active} toggleMenu={toggleMenu} />

      <ContactUs newContactUs={contactUs} />

      {contactUs ? (
        <div
          className="backdrop"
          onClick={() => {
            setContactUs(false);
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default Navbar;
