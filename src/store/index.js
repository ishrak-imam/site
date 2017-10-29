import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'

import logger from '../middlewares/logger';

import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'
const sagaMiddleware = createSagaMiddleware()


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
