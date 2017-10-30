import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListMessage from './ListMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ListMessage />, document.getElementById('root'));
registerServiceWorker();
