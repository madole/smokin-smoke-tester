import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';

// import 'material-components/lib/index.css';
import './global.scss';

// support tap events
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const initialState = {
  crawler: {
    items: []
  }
};
const store = configureStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);


render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
