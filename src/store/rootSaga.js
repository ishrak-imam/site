
import {fork, all} from 'redux-saga/effects';

import * as authSaga from '../modules/auth/saga';
import * as toastSaga from '../modules/shared/toast/saga';

const sagas = {
  ...authSaga,
  ...toastSaga
};

const forkedSagas = Object.keys(sagas).map(key => fork(sagas[key]));

export default function * rootSaga () {
  yield all(forkedSagas);
}
