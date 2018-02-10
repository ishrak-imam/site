
import {createAction} from '../../utils/reduxHelpers';

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

export const init = createAction(INIT);
export const loginReq = createAction(LOGIN_REQ);
export const loginSucs = createAction(LOGIN_SUCS);
export const loginFail = createAction(LOGIN_FAIL);

export const signUpReq = createAction(SIGN_UP_REQ);
export const signUpSucs = createAction(SIGN_UP_SUCS);
export const signUpFail = createAction(SIGN_UP_FAIL);

export const logOutReq = createAction(LOGOUT_REQ);
export const logOutSucs = createAction(LOGOUT_SUCS);
export const logOutFail = createAction(LOGOUT_FAIL);
