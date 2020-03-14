import testReducer from './test';
import { combineReducers } from 'redux';
import { activeReducer } from './active';
import { loginReducer } from './logged';
import { brandsReducer } from './brands';
import { dayNightReducer } from './dayNight';

const allReducers = combineReducers({
  test: testReducer,
  active: activeReducer,
  isLogged: loginReducer,
  IsBrands: brandsReducer,
  isDay: dayNightReducer
});

export default allReducers;
