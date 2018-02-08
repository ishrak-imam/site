import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import * as authReducers from '../modules/auth/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  ...authReducers
});

export default rootReducer;
