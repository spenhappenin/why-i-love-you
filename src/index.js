import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import './assets/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
registerServiceWorker();