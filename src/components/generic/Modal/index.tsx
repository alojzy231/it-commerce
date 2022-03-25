import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@redux/reducers';
import { closeModal, ICloseModalAction } from '@redux/actions/modalActions';

import DisclaimerModalWindow from './ModalWindow/DisclaimerModalWindow';
import ModalWrapper from './Modal.styles';

export default function Modal(): JSX.Element | null {
  const modalRef = useRef(null);

  const dispatch = useDispatch();
  const { isOpened } = useSelector((state: RootState) => state.modal);

  const handleCloseModal = (): ICloseModalAction => dispatch(closeModal());

  useEffect(() => {
    const handleBackgroundClick = (event: MouseEvent): void => {
      if (event.target === modalRef.current) handleCloseModal();
    };

    window.addEventListener('click', handleBackgroundClick);

    return () => window.removeEventListener('click', handleBackgroundClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isOpened) {
    return (
      <ModalWrapper ref={modalRef}>
        <DisclaimerModalWindow handleCloseModal={handleCloseModal} />
      </ModalWrapper>
    );
  }

  return null;
}
