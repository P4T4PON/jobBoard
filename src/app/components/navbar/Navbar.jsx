import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../actions/index';

import arrowUp from './arrow-up.png';
import SideDrawer from '../sideDrawer/SideDrawer';
import './Navbar.css';

const Navbar = () => {
  const [menu_active, setMenu_active] = useState(false);
  const [sideBar_active, setSideBar_active] = useState(false);
  const [jjit_active, setJjit_active] = useState(true);
  const [brandStories_active, setBrandStories_active] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [everythingOk, setEverythingOk] = useState(false);

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  let toggleMenu = () => {
    setMenu_active(!menu_active);
  };

  // "get started" duzo zlego kodu powtarzanie 34-180
  // nie wiem czy tak powinno sie robić (447-468)

  let resetVariables = () => {
    setName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
    setEverythingOk(false);
  };

  let checkAllInputs = event => {
    if (name === '') {
      if (!document.getElementById('name').className.includes('formError')) {
        document.getElementById('name').className += ' formError';
        document.getElementById('name').children[1].children[0].className +=
          ' content-nameError';
      }
    }

    if (companyName === '') {
      if (
        !document.getElementById('companyName').className.includes('formError')
      ) {
        document.getElementById('companyName').className += ' formError';
        document.getElementById(
          'companyName'
        ).children[1].children[0].className += ' content-nameError';
      }
    }

    if (email === '') {
      if (!document.getElementById('email').className.includes('formError')) {
        document.getElementById('email').className += ' formError';
        document.getElementById('email').children[1].children[0].className +=
          ' content-nameError';
      }
    }

    for (let i = 0; i < 3; i++) {
      if (
        !document
          .querySelector('.contactUs-content')
          .children[i].children[0].className.includes('icon-error')
      ) {
        document.querySelector('.contactUs-content').children[
          i
        ].children[0].className += ' icon-error';
      }
    }

    if (name != '' && email != '' && companyName != '') {
      setEverythingOk(true);
    }
  };

  let toggleName = event => {
    setName(event.target.value);
    if (event.target.value != '') {
      if (
        event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].classList.remove(
          'content-nameError'
        );
        event.target.parentElement.classList.remove('formError');
        event.target.parentElement.parentElement.children[0].classList.remove(
          'icon-error'
        );
      }
    } else if (event.target.value === '') {
      if (
        !event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].className += ' content-nameError';
        event.target.parentElement.className += ' formError';
        event.target.parentElement.parentElement.children[0].className +=
          ' icon-error';
      }
    }
  };

  let toggleCompanyName = event => {
    setCompanyName(event.target.value);
    if (event.target.value != '') {
      if (
        event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].classList.remove(
          'content-nameError'
        );
        event.target.parentElement.classList.remove('formError');
        event.target.parentElement.parentElement.children[0].classList.remove(
          'icon-error'
        );
      }
    } else if (event.target.value === '') {
      if (
        !event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].className += ' content-nameError';
        event.target.parentElement.className += ' formError';
        event.target.parentElement.parentElement.children[0].className +=
          ' icon-error';
      }
    }
  };

  let toggleEmail = event => {
    setEmail(event.target.value);
    if (event.target.value != '') {
      if (
        event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].classList.remove(
          'content-nameError'
        );
        event.target.parentElement.classList.remove('formError');
        event.target.parentElement.parentElement.children[0].classList.remove(
          'icon-error'
        );
      }
    } else if (event.target.value === '') {
      if (
        !event.target.nextSibling.children[0].className.includes(
          'content-nameError'
        )
      ) {
        event.target.nextSibling.children[0].className += ' content-nameError';
        event.target.parentElement.className += ' formError';
        event.target.parentElement.parentElement.children[0].className +=
          ' icon-error';
      }
    }
  };

  let togglePhone = event => {
    setPhone(event.target.value);
  };

  return (
    <div className="navbar">
      <Link
        to="/"
        onClick={() => {
          setBrandStories_active(false);
          setJjit_active(true);
        }}
      >
        <h1 className="title">justjoin.it</h1>
      </Link>
      <Link
        to="/"
        onClick={() => {
          setBrandStories_active(false);
          setJjit_active(true);
          setBrands(false);
        }}
      >
        <h2 className={jjit_active ? 'hov txt active' : 'hov txt'}>
          <i className="fas fa-suitcase"></i>
          Job Offers
        </h2>
      </Link>
      <Link
        to="/Brands"
        onClick={() => {
          setBrandStories_active(true);
          setJjit_active(false);
          setBrands(true);
        }}
      >
        <h2 className={brandStories_active ? 'hov txt active' : 'hov txt '}>
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
      <Link
        to={isLogged ? '/devs/panel/matchmaking' : '/devs/'}
        onClick={() => {
          setBrandStories_active(false);
          setJjit_active(false);
          setBrands(false);
        }}
      >
        <h2 className="hov">
          <i className="fas fa-paste "></i>
          Matchmaking
        </h2>
      </Link>
      <div className="spacer" />
      <div className="nav-right">
        {brands ? (
          <button className="bg-pink" onClick={() => setContactUs(true)}>
            Get Started
          </button>
        ) : (
          <Link to="/add-offer">
            <button className="bg-pink">Post a Job</button>
          </Link>
        )}

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
              onClick={() => {
                setSideBar_active(!sideBar_active);
                setBrands(false);
              }}
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
            onClick={() => {
              setUserPanel_active(false);
              setBrands(false);
            }}
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
            onClick={() => {
              setUserPanel_active(false);
              setBrands(false);
            }}
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
              setBrands(false);
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
        <i className="fas fa-bars mr"></i>
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
      <div className={contactUs ? 'contactUs' : 'display-none'}>
        <div className="contactUs-box">
          <div className="contactUs-header">
            <h4>Share your Brand Story</h4>
            <p>
              Learn how we can help you to increase your brand recognition.
              <br></br>
              We will contact you shortly.
            </p>
          </div>
          {everythingOk ? (
            <div className="everything-okBox">
              <div className="everything-ok">
                <i className="fas fa-check-circle"></i>
                <b>Thank you!</b>
                <p>for contacting with us.</p>
              </div>
            </div>
          ) : (
            <div className="contactUs-content">
              <div className="input brands-i">
                <i className="fas fa-user-circle"></i>
                <div className="form" id="name">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    required
                    onChange={toggleName}
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Name *</span>
                  </label>
                </div>
              </div>

              <div className="input brands-i">
                <i className="fas fa-city"></i>
                <div className="form" id="companyName">
                  <input
                    type="text"
                    name="companyName"
                    autoComplete="off"
                    value={companyName}
                    required
                    onChange={toggleCompanyName}
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Company name *</span>
                  </label>
                </div>
              </div>

              <div className="input brands-i">
                <i className="fas fa-envelope"></i>
                <div className="form" id="email">
                  <input
                    type="text"
                    name="email"
                    autoComplete="off"
                    value={email}
                    required
                    onChange={toggleEmail}
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Email *</span>
                  </label>
                </div>
              </div>

              <div className="input brands-i">
                <i className="fas fa-phone"></i>

                <div className="form" id="phone">
                  <input
                    type="text"
                    name="phone"
                    autoComplete="off"
                    value={phone}
                    required
                    onChange={togglePhone}
                  />
                  <label htmlFor="name" className="label-name">
                    <span className="content-name">Phone number</span>
                  </label>
                </div>
              </div>
            </div>
          )}
          <div className="contactUs-submitBox">
            <div
              className={everythingOk ? 'display-none' : 'contactUs-submit'}
              onClick={checkAllInputs}
            >
              CONTACT US <i className="far fa-paper-plane"></i>
            </div>
          </div>
        </div>
      </div>
      {sideBar_active ? (
        <div
          className="backdrop background-none"
          onClick={() => setSideBar_active(false)}
        ></div>
      ) : null}

      {userPanel_active ? (
        <div
          className="backdrop background-none"
          onClick={() => setUserPanel_active(false)}
        ></div>
      ) : null}
      {contactUs ? (
        <div
          className="backdrop"
          onClick={() => {
            setContactUs(false);
            resetVariables();
          }}
        ></div>
      ) : null}
    </div>
  );
};

export default Navbar;
