import {
  CLOSE_MODAL,
  ICloseModalAction,
  IOpenModalAction,
  OPEN_MODAL,
} from '@redux/actions/modalActions';

interface IState {
  isOpened: boolean;
  modalType?: string;
}

const initialState: IState = {
  isOpened: false,
};

const isMobileReducer = (
  state: IState = initialState,
  action: IOpenModalAction | ICloseModalAction,
): IState => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;
    case CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export default isMobileReducer;
