import React from 'react';

import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { test } from './app/actions/index';

const App: React.FC = () => {
  const testReducer = useSelector<any | unknown, any | unknown>(
    state => state.test
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Hello {testReducer}</h1>
      <button onClick={() => dispatch(test())}>+</button>
    </div>
  );
};

export default App;
