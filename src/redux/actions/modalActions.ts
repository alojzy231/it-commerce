import TModalType from '@customTypes/modal';

export const OPEN_MODAL: string = 'modal/open';
export const CLOSE_MODAL: string = 'modal/close';

export interface IOpenModalAction {
  type: string;
  payload: {
    isOpened: boolean;
    modalType: TModalType;
    image?: {
      url: string;
      title: string;
    };
  };
}
export interface ICloseModalAction {
  type: string;
  payload: {
    isOpened: boolean;
    modalType: TModalType;
  };
}

export const openModal = (
  modalType: TModalType,
  image = { url: '', title: '' },
): IOpenModalAction => ({
  type: OPEN_MODAL,
  payload: {
    isOpened: true,
    modalType,
    image,
  },
});

export const closeModal = (): ICloseModalAction => ({
  type: CLOSE_MODAL,
  payload: {
    isOpened: false,
    modalType: null,
  },
});
