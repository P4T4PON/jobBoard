import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../actions/index';
import userPhoto from './waving-bear.jpg';

import arrowUp from './arrow-up.png';
import SideDrawer from '../sideDrawer/SideDrawer';
import './Navbar.css';

const Navbar = () => {
  const [menu_active, setMenu_active] = useState(false);
  const [sideBar_active, setSideBar_active] = useState(false);
  const [jjit_active, setJjit_active] = useState(true);
  const [brandStories_active, setBrandStories_active] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);

  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  let toggleMenu = () => {
    setMenu_active(!menu_active);
  };

  return (
    <div className="navbar">
      {isLogged ? console.log('dupa') : null}
      <Link to="/">
        <h1
          className="title"
          onClick={() => {
            setBrandStories_active(false);
            setJjit_active(true);
          }}
        >
          justjoin.it
        </h1>
      </Link>
      <Link to="/">
        <h2
          className={jjit_active ? 'hov txt active' : 'hov txt'}
          onClick={() => {
            setBrandStories_active(false);
            setJjit_active(true);
          }}
        >
          <i className="fas fa-suitcase"></i>
          Job Offers
        </h2>
      </Link>
      <Link to="/Brands">
        <h2
          className={brandStories_active ? 'hov txt active' : 'hov txt '}
          onClick={() => {
            setBrandStories_active(true);
            setJjit_active(false);
          }}
        >
          <i className="far fa-building"></i>
          Brand Stories
        </h2>
      </Link>
      <a href="https://geek.justjoin.it/" target="_blank">
        <h2 className="hov">
          <i className="far fa-newspaper"></i>
          Just Geek IT
        </h2>
      </a>
      <Link to={isLogged ? '/devs/panel/matchmaking' : '/devs/'}>
        <h2
          className="hov"
          onClick={() => {
            setBrandStories_active(false);
            setJjit_active(false);
          }}
        >
          <i className="fas fa-paste "></i>
          Matchmaking
        </h2>
      </Link>
      <div className="spacer" />
      <div className="nav-right">
        <Link to="/add-offer">
          <button className="bg-pink">Post a Job</button>
        </Link>
        {isLogged ? (
          <div className="user-panel">
            <div
              className="userPanel-content"
              onClick={() => setUserPanel_active(!userPanel_active)}
            >
              <div className="userPhoto"></div>
              <div className="userName">TestUser</div>
              <i className="fas fa-chevron-down" />
            </div>
          </div>
        ) : (
          <div className="sign-in">
            <button
              className="bg-purple"
              onClick={() => setSideBar_active(!sideBar_active)}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
      <div
        className={
          userPanel_active
            ? 'userPanel-sidebar'
            : 'userPanel-sidebar display-none'
        }
      >
        <Link to="/devs/panel/profile">
          <div
            className="sb-link sb-userProfile"
            onClick={() => setUserPanel_active(false)}
          >
            <div className="userPanel-icon">
              <i className="far fa-user"></i>
            </div>
            <p className="link-paragraph">My profile</p>
          </div>
        </Link>
        <Link to="/devs/panel/settings">
          <div
            className="sb-link sb-userProfile"
            onClick={() => setUserPanel_active(false)}
          >
            <div className="userPanel-icon">
              <i className="fas fa-cog"></i>
            </div>
            <p className="link-paragraph">Settings</p>
          </div>
        </Link>
        <Link to="/devs/">
          <div
            className="sb-link sb-userProfile"
            onClick={() => {
              dispatch(logged());
              setUserPanel_active(false);
            }}
          >
            <div className="userPanel-icon">
              <i className="fas fa-power-off"></i>
            </div>
            <p className="link-paragraph">Log out</p>
          </div>
        </Link>
      </div>
      <div className="bars hov" onClick={() => setMenu_active(!menu_active)}>
        <i className="fas fa-bars"></i>
      </div>

      <div className={sideBar_active ? 'side-bar ' : 'side-bar display-none'}>
        <div className="arrowUp">
          <img src={arrowUp} alt="" />
        </div>
        <Link to="/devs/" onClick={() => setSideBar_active(false)}>
          <div className="sb-link">
            <i className="far fa-grin pink-icon"></i>
            <p className="link-paragraph">Sign in as a Developer</p>
          </div>
        </Link>

        <Link to="/users/sign_in" onClick={() => setSideBar_active(false)}>
          <div className="sb-link">
            <i className="fas fa-suitcase purple-icon"></i>
            <p>Sign in to Emlployer Panel</p>
          </div>
        </Link>
      </div>
      <SideDrawer menu_active={menu_active} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
