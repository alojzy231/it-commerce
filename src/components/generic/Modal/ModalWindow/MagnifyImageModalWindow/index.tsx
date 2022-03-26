import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';

import GenericModalWindow from '../GenericModalWindow';

import {
  MagnifyImageModalWindowImage,
  DisclaimerModalWindowButton,
} from './MagnifyImageModalWindow.styles';

interface IMagnifyImageModalWindow {
  handleCloseModal: () => void;
}

export default function DisclaimerModalWindow({
  handleCloseModal,
}: IMagnifyImageModalWindow): JSX.Element {
  const { image } = useSelector((state: TRootState) => state.modal);

  return (
    <GenericModalWindow>
      <MagnifyImageModalWindowImage src={image?.url} alt={image?.title} />
      <DisclaimerModalWindowButton onClick={handleCloseModal}>OK</DisclaimerModalWindowButton>
    </GenericModalWindow>
  );
}
