export const OPEN_MODAL: string = 'modal/open';
export const CLOSE_MODAL: string = 'modal/close';

export interface IOpenModalAction {
  type: string;
  payload: {
    isOpened: boolean;
    modalType: string;
  };
}
export interface ICloseModalAction {
  type: string;
  payload: {
    isOpened: boolean;
  };
}

export const openModal = (modalType: string): IOpenModalAction => ({
  type: OPEN_MODAL,
  payload: {
    isOpened: true,
    modalType,
  },
});

export const closeModal = (): ICloseModalAction => ({
  type: CLOSE_MODAL,
  payload: {
    isOpened: false,
  },
});
