import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

import store from './store';
import { Provider } from 'react-redux';

const render = Component => {
  ReactDOM.render(
    // <AppContainer>
    <Provider store={store}>
      <Component />
    </Provider>,
    // </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// // Webpack Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./App', () => { render(App) })
// }

registerServiceWorker();
