import testReducer from './test';
import { combineReducers } from 'redux';
import { activeReducer } from './active';
import { loginReducer } from './logged';

const allReducers = combineReducers({
  test: testReducer,
  active: activeReducer,
  isLogged: loginReducer
});

export default allReducers;
