import React, { useState } from 'react';
import './Backdrop.css';
import { test } from '../../actions/index';
import { useSelector, useDispatch } from 'react-redux';

const Backdrop = () => {
  const isTest = useSelector(state => state.isTest);
  const dispatch = useDispatch();

  const toggleTest = () => {
    if (isTest === true) {
      document.getElementById("body").style.overflow = "visible";
    } else if (isTest === false) {
      document.getElementById("body").style.overflow = 'hidden';
    }
  };

  return (
    <div
      className="backdrop"
      onMouseDown={() => { dispatch(test()); toggleTest() }}
    />
  );
};

export default Backdrop;
