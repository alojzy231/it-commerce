import React from 'react';
import { useDispatch } from 'react-redux';

import { closeModal, ICloseModalAction } from '@redux/actions/modalActions';
import CloseButton from '@generic/buttons/CloseButton';

import {
  GenericModalWindowContainer,
  GenericModalWindowContentContainer,
  GenericModalWindowHeader,
  GenericModalWindowHeaderTitle,
} from './GenericModalWindow.styles';

interface IGenericModalWindow {
  children: React.ReactChild | React.ReactChild[];
}

export default function GenericModalWindow({ children }: IGenericModalWindow): JSX.Element {
  const dispatch = useDispatch();

  const handleCloseModal = (): ICloseModalAction => dispatch(closeModal());

  return (
    <GenericModalWindowContainer>
      <GenericModalWindowHeader>
        <GenericModalWindowHeaderTitle>Disclaimer</GenericModalWindowHeaderTitle>
        <CloseButton onClick={handleCloseModal} />
      </GenericModalWindowHeader>
      <GenericModalWindowContentContainer>{children}</GenericModalWindowContentContainer>
    </GenericModalWindowContainer>
  );
}
