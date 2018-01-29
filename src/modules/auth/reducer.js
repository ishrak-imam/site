import { createAction, createReducer } from 'redux-act';

const INITIAL_STATE = {
  checkingLogin: false,
  loading: false,
  user: null,
  login: false,
  loginErr: null,
  signupErr: null,
  logoutErr: null
};

export const init = createAction('INIT');

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailed = createAction('LOGIN_FAILED');

export const signupRequest = createAction('SIGNUP_REQUEST');
export const signupSuccess = createAction('SIGNUP_SUCCESS');
export const signupFailed = createAction('SIGNUP_FAILED');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutFailed = createAction('LOGOUT_FAILED');

const auth = createReducer({

  [init]: (state, payload) => ({ ...state, checkingLogin: true }),

  [loginRequest]: (state, payload) => ({ ...state, loading: true, loginErr: null }),
  [loginFailed]: (state, payload) => ({ ...state, loading: false, loginErr: payload, checkingLogin: false }),
  [loginSuccess]: (state, payload) => ({ ...state, loading: false, user: payload, login: true, loginErr: null, checkingLogin: false }),

  [signupRequest]: (state, payload) => ({ ...state, loading: true, signupErr: null }),
  [signupFailed]: (state, payload) => ({ ...state, loading: false, signupErr: payload }),
  [signupSuccess]: (state, payload) => ({ ...state, loading: false, user: payload }),

  [logoutRequest]: (state, payload) => ({ ...state, logoutErr: null }),
  [logoutFailed]: (state, payload) => ({ ...state, logoutErr: payload, login: false, user: null }),
  [logoutSuccess]: (state, payload) => (INITIAL_STATE)

}, INITIAL_STATE);

export default auth;
