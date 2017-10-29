
import {
  watchInit,
  watchLogin,
  watchSignup,
  watchLogout
} from '../../modules/auth/saga';



import { fork, all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(watchInit),
    fork(watchLogin),
    fork(watchSignup),
    fork(watchLogout)
  ])
}