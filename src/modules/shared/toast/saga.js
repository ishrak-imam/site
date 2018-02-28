
import {take} from 'redux-saga/effects';
import {toast, style} from 'react-toastify';

import {
  toastSucs,
  toastErr
} from './action';

const DEFAULT_OPTIONS = {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: true, // 5000 miliseconds
  closeButton: null,
  transition: null,
  hideProgressBar: false,
  pauseOnHover: true,
  closeOnClick: true,
  newestOnTop: true,
  className: null,
  style: null,
  toastClassName: null,
  bodyClassName: null,
  progressClassName: null
};

style({
  colorError: '#000'
});

export function * workerToastSucs () {
  while (true) {
    const {payload} = yield take(toastSucs.getType());
    const {text, options} = payload;
    toast.success(text, {...DEFAULT_OPTIONS, ...options});
  }
}

export function * workerToastErr () {
  while (true) {
    const {payload} = yield take(toastErr.getType());
    const {text, options} = payload;
    toast.error(text, {...DEFAULT_OPTIONS, ...options});
  }
}
