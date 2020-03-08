import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import history from './history';
import persistReducer from './persistReducer';
import '../../config/ReactotronConfig';
import reducers from './reducers';
import sagas from './sagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const store = createStore(persistReducer(reducers(history)), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
