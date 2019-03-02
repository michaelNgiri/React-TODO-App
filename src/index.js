import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




ReactDOM.render(<App />, document.getElementById('root'));

//If you want, you can unregister the service worker, but it will no longer work offline.
serviceWorker.register();
