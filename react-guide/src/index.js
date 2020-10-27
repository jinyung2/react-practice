import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const appTitle = "Person Manager";

ReactDOM.render(<App appTitle={appTitle}/>, document.getElementById('root'));
registerServiceWorker();
