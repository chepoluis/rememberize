import React from 'react';
import ReactDOM from 'react-dom';
import { RememberizeApp } from './RememberizeApp';
import { Provider } from 'react-redux';
import { store } from './store';

import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RememberizeApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
