import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const isDev = process.env.NODE_ENV !== 'production';

const bindMiddleware = (middleware, useDevTools) => {
  if (useDevTools) {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

function configureStore(useDevTools = isDev) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(),
    bindMiddleware([sagaMiddleware], useDevTools),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
