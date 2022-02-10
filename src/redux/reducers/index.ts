import { combineReducers } from 'redux';

import isMobileReducer from './isMobileReducer';

export interface IRootState {
  isMobile: boolean;
}

const rootReducer = combineReducers({
  isMobile: isMobileReducer,
});

export default rootReducer;
