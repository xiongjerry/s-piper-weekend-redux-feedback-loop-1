import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//Reducer with cases for each section we'll send back things
const feedbackList = (state = [], action) => {
  switch (action.type) {
    case 'FEELING':
      return [...state, action.payload];
    case 'UNDERSTANDING':
      return [...state, action.payload];
    case 'SUPPORTED':
      return [...state, action.payload];
    case 'COMMENTS':
      return [...state, action.payload];
    case 'RESET':
      return [];
    default:
      return state;
  }
};

//Gives us access across the app
const store = createStore(
  combineReducers({
    feedbackList,
  }), applyMiddleware(logger)
);

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>,
  document.getElementById('root')); registerServiceWorker();
