/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'redux';

import rootReducer from './reducers';

const enhancers: any[] = [];

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const devToolsExtension =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const configureStore = (): Store => createStore(rootReducer, ...enhancers);

export default configureStore;
