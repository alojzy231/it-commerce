import { combineReducers } from 'redux';

import isMobileReducer from './isMobileReducer';

const rootReducer = combineReducers({
  isMobile: isMobileReducer,
});

export default rootReducer;
