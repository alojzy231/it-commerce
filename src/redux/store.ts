/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, Store } from 'redux';

import { loadShoppingCartState, saveShoppingCartState } from './loadShoppingCartState';
import rootReducer from './reducers';

const enhancers: any[] = [];

const persistedState = loadShoppingCartState();

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const devToolsExtension =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension);
  }
}

const configureStore = (): Store => {
  const store = createStore(rootReducer, persistedState, ...enhancers);
  store.subscribe(() => {
    saveShoppingCartState(store.getState().shoppingCart);
  });

  return store;
};

export default configureStore;
