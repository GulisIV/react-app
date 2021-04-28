import React from 'react';
import ReactDOM from 'react-dom';
import { init } from './store';
import { Provider } from 'react-redux';
import Lang from './Lang';
import App from './components/app';

ReactDOM.render(
  <Provider store={init().getStore()}>
    <Lang>
      <React.Fragment>
        <App />
      </React.Fragment>
    </Lang>
  </Provider>,
  document.getElementById('root')
);
