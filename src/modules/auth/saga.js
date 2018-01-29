
// import { delay } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';
import Client from '../../client';

import {

  init,

  loginRequest,
  loginSuccess,
  loginFailed,

  signupRequest,
  signupSuccess,
  signupFailed,

  logoutRequest,
  logoutSuccess,
  logoutFailed

} from './reducer';

export function * watchInit () {
  yield takeLatest(init.getType(), workerInit);
}

function * workerInit () {
  try {
    const { accessToken } = yield call(Client.authenticate);
    const { userId } = yield call(Client.verifyJWT, accessToken);
    const userData = yield call(Client.getUser, userId);
    // yield delay(2000);
    yield put(loginSuccess(userData));
  } catch (e) {
    yield put(loginFailed(null));
  }
}

export function * watchLogin () {
  yield takeLatest(loginRequest.getType(), workerLogin);
}

function * workerLogin (action) {
  try {
    const { accessToken } = yield call(Client.authenticate, action.payload);
    const { userId } = yield call(Client.verifyJWT, accessToken);
    const userData = yield call(Client.getUser, userId);
    yield put(loginSuccess(userData));
  } catch (e) {
    yield put(loginFailed(e));
  }
}

export function * watchSignup () {
  yield takeLatest(signupRequest.getType(), workerSignup);
}

function * workerSignup (action) {
  try {
    action.payload.strategy = 'local';
    const user = yield call(Client.createUser, action.payload);
    yield put(signupSuccess(user));
    yield put(loginRequest(action.payload));
  } catch (e) {
    yield put(signupFailed(e));
  }
}

export function * watchLogout () {
  yield takeLatest(logoutRequest.getType(), workerLogout);
}

function * workerLogout () {
  try {
    yield call(Client.logout);
    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutFailed(e));
  }
}
