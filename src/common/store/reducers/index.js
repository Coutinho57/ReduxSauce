import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import todos from './todos';

export default history =>
  combineReducers({
    router: connectRouter(history),
    todos: todos,
  });
