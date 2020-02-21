import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logged } from '../../actions/index';
import NavLink from './NavLink';
import NavButton from './NavButton';
import SideDrawer from '../sideDrawer/SideDrawer';
import LinkButton from '../additions/LinkButton';
import UserPanelLink from './userPanel/UserPanelLink';
import ContactInput from './contactUs/ContactInput';
import ThankYou from './contactUs/ThankYou';
import UserPanel from './userPanel/UserPanel';
import ContactUsSubmit from './contactUs/ContactUsSubmit';
import Roads from '../navbar/roads/Roads';
import './Navbar.css';
import UserPanelBox from './userPanel/UserPanelBox';

const Navbar = () => {
  const [menu_active, setMenu_active] = useState(false);
  const [sideBar_active, setSideBar_active] = useState(false);
  const [jjit_active, setJjit_active] = useState(true);
  const [brandStories_active, setBrandStories_active] = useState(false);
  const [userPanel_active, setUserPanel_active] = useState(false);
  const [brands, setBrands] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [everythingOk, setEverythingOk] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');

  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenu_active(!menu_active);
  };

  const resetVariables = () => {
    setName('');
    setEmail('');
    setCompanyName('');
    setPhone('');
    setEverythingOk(false);
  };

  const checkAllInputs = () => {
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

    if (name !== '' && email !== '' && companyName !== '') {
      setEverythingOk(true);
    }
  };

  const setVariable = event => {
    setActiveId(event.target.parentElement.id);
  };

  const toggleInput = event => {
    const etv = event.target.value;
    if (activeId === 'name') {
      setName(etv);
    } else if (activeId === 'companyName') {
      setCompanyName(etv);
    } else if (activeId === 'email') {
      setEmail(etv);
    } else if (activeId === 'phone') {
      setPhone(etv);
    }

    if (event.target.value !== '') {
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

  const onBrandsChange = newBrands => {
    setBrands(newBrands);
  };

  return (
    <div className="navbar">
      <Roads brands={brands} changeBrands={onBrandsChange} />

      <div className="spacer" />
      <UserPanelBox newBrands={brands} />
      {/* <div className="nav-right">
        {brands ? (
          <NavButton
            className={'bg-pink'}
            fooOnClick={() => setContactUs(true)}
            text={'Get Started'}
          />
        ) : (
          <LinkButton
            link={'/add-offer'}
            className={'roundedBtn bg-pink'}
            text={'Post a Job'}
          />
        )}

        {isLogged ? (
          <UserPanel
            setUserPanel_active={() => setUserPanel_active(!userPanel_active)}
          />
        ) : (
          <NavButton
            className={'bg-purple'}
            fooOnClick={() => {
              setSideBar_active(!sideBar_active);
              setBrands(false);
            }}
            text={'Sign in'}
          />
        )}
      </div> */}

      <div
        className={
          userPanel_active
            ? 'userPanel-sidebar'
            : 'userPanel-sidebar display-none'
        }
      >
        <UserPanelLink
          link={'/devs/panel/profile'}
          setUserPanel_active={() => {
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'far fa-user'}
          paragraph={'My profile'}
        />
        <UserPanelLink
          link={'/devs/panel/settings'}
          setUserPanel_active={() => {
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'fas fa-cog'}
          paragraph={'Settings'}
        />
        <UserPanelLink
          link={'/'}
          setUserPanel_active={() => {
            dispatch(logged());
            setUserPanel_active(false);
            setBrands(false);
          }}
          iconClass={'fas fa-power-off'}
          paragraph={'Log out'}
        />
      </div>

      <div className="bars hov" onClick={() => setMenu_active(!menu_active)}>
        <i className="fas fa-bars mr"></i>
      </div>

      <div className={sideBar_active ? 'side-bar ' : 'side-bar display-none'}>
        <UserPanelLink
          link={'/devs/'}
          setUserPanel_active={() => setSideBar_active(false)}
          iconClass={'far fa-grin pink-icon'}
          paragraph={'Sign in as a Developer'}
        />
        <UserPanelLink
          link={'/users/sign_in'}
          setUserPanel_active={() => setSideBar_active(false)}
          iconClass={'fas fa-suitcase purple-icon'}
          paragraph={'Sign in to Emlployer Panel'}
        />
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
            <ThankYou />
          ) : (
            <div className="contactUs-content">
              <ContactInput
                iconClass={'fas fa-user-circle'}
                id={'name'}
                setVariable={setVariable}
                toggleInput={toggleInput}
                span={'Name *'}
                value={name}
              />

              <ContactInput
                iconClass={'fas fa-city'}
                id={'companyName'}
                setVariable={setVariable}
                toggleInput={toggleInput}
                span={'Company name *'}
                value={companyName}
              />

              <ContactInput
                iconClass={'fas fa-envelope'}
                id={'email'}
                setVariable={setVariable}
                toggleInput={toggleInput}
                span={'Email *'}
                value={email}
              />

              <ContactInput
                iconClass={'fas fa-phone'}
                id={'phone'}
                setVariable={setVariable}
                toggleInput={toggleInput}
                span={'Phone number'}
                value={phone}
              />
            </div>
          )}
          <ContactUsSubmit
            everythingOk={everythingOk}
            checkAllInputs={checkAllInputs}
          />
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
