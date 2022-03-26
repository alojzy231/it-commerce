import { combineReducers } from 'redux';

import isMobileReducer from './isMobileReducer';
import modalReducer from './modalReducer';

export interface IRootState {
  isMobile: boolean;
}

const rootReducer = combineReducers({
  isMobile: isMobileReducer,
  modal: modalReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
