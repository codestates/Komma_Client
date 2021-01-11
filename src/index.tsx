import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);