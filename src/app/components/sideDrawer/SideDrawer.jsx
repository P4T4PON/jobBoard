import React from 'react';

import { test } from '../../actions/index';
import './SideDrawer.css';

const sideDrawer = () => {
  return (
    <nav className={test ? 'side-drawer' : 'side-drawer open'}>
      <h1>justjoin.it</h1>
      <ul>
        <a href="/">
          <li>
            <i className="fas fa-suitcase"></i>
            Employer Panel
          </li>
        </a>

        <a href="/">
          <li>
            <i className="fab fa-facebook-f"></i>
            JustJoinIT
          </li>
        </a>

        <a href="/">
          <li>
            <i className="fas fa-microphone"></i>
            Event
          </li>
        </a>

        <a href="/">
          <li>
            <i className="fas fa-user-friends"></i>
            About us
          </li>
        </a>

        <a href="/">
          <li>
            <i className="fas fa-rss"></i>
            RSS
          </li>
        </a>

        <a href="/">
          <li>
            <i className="far fa-file-pdf"></i>
            Terms
          </li>
        </a>

        <a href="/">
          <li>
            <i className="far fa-file-pdf"></i>
            Policy
          </li>
        </a>

        <a href="/">
          <li>
            <i className="fas fa-envelope"></i>
            Contact info
          </li>
        </a>
      </ul>
    </nav>
  );
};

export default sideDrawer;
