
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import {
  LOGOUT_SUCS, LOGOUT_FAIL
} from '../modules/auth/action';

import * as authReducers from '../modules/auth/reducer';

const appReducer = combineReducers({
  form: formReducer,
  ...authReducers
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT_SUCS || action.type === LOGOUT_FAIL) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
