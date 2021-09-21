import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './Redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  // now we can acces to our store (state)
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);