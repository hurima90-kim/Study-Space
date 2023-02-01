import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import TodoList from 'containers/TodoList';
import './styles.scss';

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App