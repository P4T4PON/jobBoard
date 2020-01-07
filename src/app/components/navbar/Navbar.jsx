import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import arrowUp from './arrow-up.png';
import SideDrawer from '../sideDrawer/SideDrawer';
import './Navbar.css';

class Navbar extends Component {
  state = {
    menu_active: false,
    sideBar_active: false,
    jjit_active: true,
    brandStories_active: false
  };

  toggleMenu = () => {
    this.setState({ menu_active: !this.state.menu_active });
  };

  toggleSideBar = () => {
    this.setState({ sideBar_active: !this.state.sideBar_active });
  };

  hideSidebar = () => {
    this.setState({ sideBar_active: false });
  };

  togglejjit = () => {
    this.setState({ jjit_active: true });
    this.setState({ brandStories_active: false });
  };

  toggleBrandStories = () => {
    this.setState({ brandStories_active: true });
    this.setState({ jjit_active: false });
  };

  toggleNone = () => {
    this.setState({ brandStories_active: false });
    this.setState({ jjit_active: false });
  };

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1 className="title" onClick={this.togglejjit}>
            justjoin.it
          </h1>
        </Link>
        <Link to="/">
          <h2
            className={this.state.jjit_active ? 'hov txt active' : 'hov txt'}
            onClick={this.togglejjit}
          >
            <i className="fas fa-suitcase"></i>
            Job Offers
          </h2>
        </Link>
        <Link to="/Brands">
          <h2
            className={
              this.state.brandStories_active ? 'hov txt active' : 'hov txt '
            }
            onClick={this.toggleBrandStories}
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
        <Link to="/devs/">
          <h2 className="hov" onClick={this.toggleNone}>
            <i className="fas fa-paste "></i>
            Matchmaking
          </h2>
        </Link>
        <div className="spacer" />
        <div className="nav-right">
          <Link to="/add-offer">
            <button className="bg-pink">Post a Job</button>
          </Link>
          <div className="sign-in">
            <button className="bg-purple" onClick={this.toggleSideBar}>
              Sign in
            </button>
          </div>
        </div>
        <div className="bars hov" onClick={this.toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        <div
          className={
            this.state.sideBar_active ? 'side-bar ' : 'side-bar display-none'
          }
        >
          <div className="arrowUp">
            <img src={arrowUp} alt="" />
          </div>
          <Link to="/devs/" onClick={this.hideSidebar}>
            <div className="sb-link">
              <i className="far fa-grin pink-icon"></i>
              <p className="link-paragraph">Sign in as a Developer</p>
            </div>
          </Link>

          <Link to="/users/sign_in" onClick={this.hideSidebar}>
            <div className="sb-link">
              <i className="fas fa-suitcase purple-icon"></i>
              <p>Sign in to Emlployer Panel</p>
            </div>
          </Link>
        </div>
        <SideDrawer
          menu_active={this.state.menu_active}
          toggleMenu={this.toggleMenu}
        />
      </div>
    );
  }
}

export default Navbar;
