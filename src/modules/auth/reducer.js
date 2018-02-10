
import {
  INIT,
  LOGIN_REQ, LOGIN_SUCS, LOGIN_FAIL,
  SIGN_UP_REQ, SIGN_UP_SUCS, SIGN_UP_FAIL
} from './action';

import {createReducer, updateObject} from '../../utils/reduxHelpers';

const LOGIN = {
  checking: false,
  loading: false,
  error: null,
  user: null
};

const SIGN_UP = {
  loading: false,
  error: null
};

export const login = createReducer(LOGIN, {
  [INIT]: (state, payload) => updateObject(state, {checking: true}),
  [LOGIN_REQ]: (state, payload) => updateObject(state, {loading: true, error: null}),
  [LOGIN_SUCS]: (state, payload) => updateObject(state, {loading: false, checking: false, user: payload}),
  [LOGIN_FAIL]: (state, payload) => updateObject(state, {loading: false, checking: false, error: payload})
});

export const signUp = createReducer(SIGN_UP, {
  [SIGN_UP_REQ]: (state, payload) => updateObject(state, {loading: true, error: null}),
  [SIGN_UP_SUCS]: (state, payload) => updateObject(state, {loading: false}),
  [SIGN_UP_FAIL]: (state, payload) => updateObject(state, {loading: false, error: payload})
});
