import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SideDrawer from './sideDrawer/SideDrawer';
import ContactUs from './contactUs/ContactUs';
import Roads from '../navbar/roads/Roads';
import UserPanelBox from './userPanel/userPanelBox/UserPanelBox';
import BurgerIcon from './burgerIcon/BurgerIcon'
import Backdrop from '../jobOffers/contactUsBox/contactUs/backdrop/Backdrop'
import './Navbar.css';

const Navbar = () => {
  const isDay = useSelector(state => state.isDay);
  const isTest = useSelector(state => state.isTest);
  const [menu_active, setMenu_active] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  const toggleMenu = (active) => {
    setMenu_active(active);
  };

  const onBrandsChange = newBrands => {
    setBrands(newBrands);
  };

  const onContactChange = newContact => {
    setContactUs(newContact);
  };

  const hideContact = () => {
    setContactUs(false)
  }

  const toggleTest = () => {
    if (isTest === true) {
      document.getElementById("body").style.overflow = "visible";
    } else if (isTest === false) {
      document.getElementById("body").style.overflow = "hidden";
    }
  };

  return (
    <div className={isDay ? 'navbar' : 'navbar navbarNightMode'}>
      <Roads brands={brands} changeBrands={onBrandsChange} isDay={isDay} />
      <div className="spacer" />
      <UserPanelBox
        brands={brands}
        changeContact={onContactChange}
        isDay={isDay}
      />
      <BurgerIcon toggleTest={toggleTest} />
      <SideDrawer menu_active={menu_active} toggleMenu={toggleMenu} />
      <ContactUs newContactUs={contactUs} />
      {contactUs && (<Backdrop hideSalaryFilters={hideContact} />)}
    </div>
  );
};

export default Navbar;
