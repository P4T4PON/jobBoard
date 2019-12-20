import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { test, active } from '../../actions/index';

import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <Link to="/">
        <h1 className="hov title">justjoin.it</h1>
      </Link>

      <Link to="/" onClick={() => dispatch(active())}>
        <h2 className={active ? 'hov txt active' : 'hov txt'}>
          <i className="fas fa-suitcase"></i>
          Job Offers
        </h2>
      </Link>

      <Link to="/Brands" onClick={() => dispatch(active())}>
        <h2 className={active ? 'hov txt' : 'hov txt  active'}>
          <i className="far fa-building"></i>
          Brand Stories
        </h2>
      </Link>

      <a href="https://geek.justjoin.it/">
        <h2 className="hov">
          <i className="far fa-newspaper"></i>
          Just Geek IT
        </h2>
      </a>

      <Link to="/devs/">
        <h2 className="hov">
          <i className="fas fa-paste "></i>
          Matchmaking
        </h2>
      </Link>
      <div className="spacer" />

      <Link to="/add-offer">
        <button className="bg-pink">Post a Job</button>
      </Link>
      <button className="bg-purple">Sign in</button>
      <div className="bars hov" onClick={() => dispatch(test())}>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Navbar;
