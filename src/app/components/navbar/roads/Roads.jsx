import React, { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavLink from '../NavLink';

const Roads = ({ changeBrands, isDay }) => {
  const [brandStories_active, setBrandStories_active] = useState(false);
  const [jjit_active, setJjit_active] = useState(true);
  const [brands, setBrands] = useState(false);

  const isLogged = useSelector(state => state.isLogged);

  return (
    <Fragment>
      <Link
        to="/"
        onClick={() => {
          setBrandStories_active(false);
          setJjit_active(true);
        }}
      >
        <h1 className={isDay ? 'title' : 'title titleNightMode'}>
          justjoin.it
        </h1>
      </Link>

      <NavLink
        link={'/'}
        fooOnClick={() => {
          setBrandStories_active(false);
          setJjit_active(true);
          setBrands(false);
          changeBrands(false);
        }}
        active={jjit_active}
        iconClass={'fas fa-suitcase'}
        text={'Job Offers'}
      />

      <NavLink
        link={'/Brands'}
        fooOnClick={() => {
          setBrandStories_active(true);
          setJjit_active(false);
          setBrands(true);
          changeBrands(true);
        }}
        active={brandStories_active}
        iconClass={'far fa-building'}
        text={'Brand Stories'}
      />

      <a
        href="https://geek.justjoin.it/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className="hov">
          <i className="far fa-newspaper"></i>
          Just Geek IT
        </h2>
      </a>

      <NavLink
        isLogged={isLogged}
        link={'/devs/'}
        fooOnClick={() => {
          setBrandStories_active(false);
          setJjit_active(false);
          setBrands(false);
          changeBrands(false);
        }}
        iconClass={'fas fa-paste'}
        text={'Matchmaking'}
      />
    </Fragment>
  );
};

export default Roads;
