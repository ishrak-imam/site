
export const INIT = 'INIT';
export const LOGIN_REQ = 'LOGIN_REQ';
export const LOGIN_SUCS = 'LOGIN_SUCS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const SIGN_UP_REQ = 'SIGN_UP_REQ';
export const SIGN_UP_SUCS = 'SIGN_UP_SUCS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const LOGOUT_REQ = 'LOGOUT_REQ';
export const LOGOUT_SUCS = 'LOGOUT_SUCS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const init = () => ({
  type: INIT
});

export const loginReq = payload => ({
  type: LOGIN_REQ,
  payload
});

export const loginSucs = payload => ({
  type: LOGIN_SUCS,
  payload
});

export const loginFail = payload => ({
  type: LOGIN_FAIL,
  payload
});

export const signUpReq = payload => ({
  type: SIGN_UP_REQ,
  payload
});

export const signUpSucs = payload => ({
  type: SIGN_UP_SUCS,
  payload
});

export const signUpFail = payload => ({
  type: SIGN_UP_FAIL,
  payload
});

export const logOutReq = () => ({
  type: LOGOUT_REQ
});

export const logOutSucs = () => ({
  type: LOGOUT_SUCS
});

export const logOutFail = payload => ({
  type: LOGOUT_FAIL,
  payload
});
