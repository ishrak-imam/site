
import {
  INIT,
  LOGIN_REQ, LOGIN_SUCS, LOGIN_FAIL,
  SIGN_UP_REQ, SIGN_UP_SUCS, SIGN_UP_FAIL,
  LOGOUT_SUCS, LOGOUT_FAIL

} from './action';

import {createReducer} from '../../utils/redux';

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
  [INIT]: (state, payload) => ({...state, checking: true}),
  [LOGIN_REQ]: (state, payload) => ({...state, loading: true, error: null}),
  [LOGIN_SUCS]: (state, payload) => ({...state, loading: false, checking: false, user: payload}),
  [LOGIN_FAIL]: (state, payload) => ({...state, loading: false, checking: false, error: payload}),

  [LOGOUT_SUCS]: (state, payload) => (LOGIN),
  [LOGOUT_FAIL]: (state, payload) => (LOGIN)
});

export const signUp = createReducer(SIGN_UP, {
  [SIGN_UP_REQ]: (state, payload) => ({...state, loading: true, error: null}),
  [SIGN_UP_SUCS]: (state, payload) => ({...state, loading: false}),
  [SIGN_UP_FAIL]: (state, payload) => ({...state, loading: false, error: payload})
});
