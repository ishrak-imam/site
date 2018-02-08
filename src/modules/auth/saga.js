
// import { delay } from 'redux-saga';
import { call, takeLatest, put } from 'redux-saga/effects';
import Client from '../../client';

import {
  init,
  loginReq, loginSucs, loginFail,
  signUpReq, signUpFail, signUpSucs,
  logOutReq, logOutSucs, logOutFail
} from './action';

export function * watchInit () {
  yield takeLatest(init.getType(), workerInit);
}

function * workerInit () {
  try {
    const { accessToken } = yield call(Client.authenticate);
    const { userId } = yield call(Client.verifyJWT, accessToken);
    const userData = yield call(Client.getUser, userId);
    // yield delay(2000);
    yield put(loginSucs(userData));
  } catch (e) {
    yield put(loginFail(null));
  }
}

export function * watchLogin () {
  yield takeLatest(loginReq.getType(), workerLogin);
}

function * workerLogin (action) {
  try {
    const { accessToken } = yield call(Client.authenticate, action.payload);
    const { userId } = yield call(Client.verifyJWT, accessToken);
    const userData = yield call(Client.getUser, userId);
    yield put(loginSucs(userData));
  } catch (e) {
    yield put(loginFail(e));
  }
}

export function * watchSignup () {
  yield takeLatest(signUpReq.getType(), workerSignup);
}

function * workerSignup (action) {
  try {
    action.payload.strategy = 'local';
    const user = yield call(Client.createUser, action.payload);
    yield put(signUpSucs(user));
    yield put(loginReq(action.payload));
  } catch (e) {
    yield put(signUpFail(e));
  }
}

export function * watchLogout () {
  yield takeLatest(logOutReq.getType(), workerLogout);
}

function * workerLogout () {
  try {
    yield call(Client.logout);
    yield put(logOutSucs());
  } catch (e) {
    yield put(logOutFail(e));
  }
}
