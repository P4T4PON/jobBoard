import testReducer from './test';
import { combineReducers } from 'redux';
import { activeReducer } from './active';

const allReducers = combineReducers({
  test: testReducer,
  active: activeReducer
});

export default allReducers;
