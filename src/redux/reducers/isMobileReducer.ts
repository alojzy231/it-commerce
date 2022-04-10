import { Reducer } from 'react';

import { TOGGLE_IS_MOBILE, IIsMobileAction } from '../actions/isMobileActions';

const initialState: boolean = true;

const isMobileReducer: Reducer<boolean, IIsMobileAction> = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_MOBILE:
      return action.payload;
    default:
      return state;
  }
};

export default isMobileReducer;
