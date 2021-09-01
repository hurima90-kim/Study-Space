import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';
import { composeWithDevTools } from 'redux-devtools-extension';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;