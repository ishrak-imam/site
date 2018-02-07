import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

import logger from '../middlewares/logger';
// import Logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
/* eslint-disable */
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
/* eslint-disable */


const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
export default store;
