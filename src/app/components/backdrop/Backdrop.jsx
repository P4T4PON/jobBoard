import React from 'react';
import { useDispatch } from 'react-redux';

import { test } from '../../../app/actions/index';
import './Backdrop.css';

const Backdrop = () => {
  const dispatch = useDispatch();
  return <div className="backdrop" onClick={() => dispatch(test())}></div>;
};

export default Backdrop;
