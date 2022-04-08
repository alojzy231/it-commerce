import React from 'react';

import TModalType from '@customTypes/modal';

import DisclaimerModalWindow from './DisclaimerModalWindow';
import MagnifyImageModalWindow from './MagnifyImageModalWindow';
import FilterByModalWindow from './FilterByModalWindow';

interface IModalWindow {
  modalType: TModalType;
  handleCloseModal: () => void;
}

export default function ModalWindow({
  modalType,
  handleCloseModal,
}: IModalWindow): JSX.Element | null {
  switch (modalType) {
    case 'disclaimer':
      return <DisclaimerModalWindow handleCloseModal={handleCloseModal} />;
    case 'magnifyImage':
      return <MagnifyImageModalWindow handleCloseModal={handleCloseModal} />;
    case 'filterBy':
      return <FilterByModalWindow handleCloseModal={handleCloseModal} />;
    default:
      return null;
  }
}
