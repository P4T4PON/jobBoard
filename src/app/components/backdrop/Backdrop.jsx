import React from 'react';
import './Backdrop.css';
import { test } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const Backdrop = ({ toggleMenu }) => {
  const isTest = useSelector(state => state.isTest);
  const dispatch = useDispatch();
//TODO: Łapiesz elementy z DOM
  const toggleTest = () => {
    if (isTest === true) {
      document.getElementById('body').className = 'overflow-hidden';
    } else if (isTest === false) {
      document.getElementById('body').className = 'overflow-visible';
    }
  };
  return (
    <div
      className="backdrop"
      onClick={toggleMenu}
      onMouseDown={() => dispatch(test())}
      onMouseUp={toggleTest}
    />
  );
};

export default Backdrop;
