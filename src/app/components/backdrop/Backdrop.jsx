import React, { useState } from 'react';
import './Backdrop.css';
import { test } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const Backdrop = () => {
  const isTest = useSelector(state => state.isTest);
  const dispatch = useDispatch();

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
      onMouseDown={() => dispatch(test())}
      onMouseUp={toggleTest}
    />
  );
};

export default Backdrop;
