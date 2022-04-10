import { combineReducers } from 'redux';

import isMobileReducer from './isMobileReducer';
import modalReducer from './modalReducer';
import shoppingCartReducer from './shoppingCartReducer';

const rootReducer = combineReducers({
  isMobile: isMobileReducer,
  modal: modalReducer,
  shoppingCart: shoppingCartReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
