import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// import reducers from './reducers';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './modules';
// import createSagaMiddleware from 'redux-saga';
import GlobalStyles from 'styles/GlobalStyles';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run();

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
);
