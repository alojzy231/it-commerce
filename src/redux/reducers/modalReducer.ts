import TModalType from '@customTypes/modal';
import {
  CLOSE_MODAL,
  ICloseModalAction,
  IOpenModalAction,
  OPEN_MODAL,
} from '@redux/actions/modalActions';

interface IState {
  isOpened: boolean;
  modalType: TModalType;
  image?: {
    url: string;
    title: string;
  };
}

const initialState: IState = {
  isOpened: false,
  modalType: 'disclaimer',
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
