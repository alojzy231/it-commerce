import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@redux/reducers';
import { closeModal, ICloseModalAction } from '@redux/actions/modalActions';

import DisclaimerModalWindow from './ModalWindow/DisclaimerModalWindow';
import { ModalContainer, ModalBackground } from './Modal.styles';

export default function Modal(): JSX.Element | null {
  const dispatch = useDispatch();
  const { isOpened } = useSelector((state: RootState) => state.modal);

  const handleCloseModal = (): ICloseModalAction => dispatch(closeModal());

  if (isOpened) {
    return (
      <ModalContainer>
        <DisclaimerModalWindow handleCloseModal={handleCloseModal} />
        <ModalBackground onClick={handleCloseModal} />
      </ModalContainer>
    );
  }

  return null;
}
