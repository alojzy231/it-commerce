import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';
import { closeModal, ICloseModalAction } from '@redux/actions/modalActions';

import ModalWindow from './ModalWindow';
import ModalWrapper from './Modal.styles';

export default function Modal(): JSX.Element | null {
  const modalRef = useRef(null);

  const dispatch = useDispatch();
  const { isOpened, modalType } = useSelector((state: TRootState) => state.modal);

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
        <ModalWindow modalType={modalType} handleCloseModal={handleCloseModal} />
      </ModalWrapper>
    );
  }

  return null;
}
