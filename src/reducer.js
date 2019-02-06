import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';

export default combineReducers({
  auth,
  common,
  home,
  router: routerReducer
});