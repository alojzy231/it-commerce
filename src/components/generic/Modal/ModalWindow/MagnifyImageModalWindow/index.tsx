import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';

import GenericModalWindow from '../GenericModalWindow';

import {
  MagnifyImageModalWindowImage,
  MagnifyImageModalWindowButton,
} from './MagnifyImageModalWindow.styles';

interface IMagnifyImageModalWindow {
  handleCloseModal: () => void;
}

export default function DisclaimerModalWindow({
  handleCloseModal,
}: IMagnifyImageModalWindow): JSX.Element {
  const { image } = useSelector((state: TRootState) => state.modal);

  return (
    <GenericModalWindow title="Product">
      <MagnifyImageModalWindowImage src={image?.url} alt={image?.title} />
      <MagnifyImageModalWindowButton onClick={handleCloseModal}>OK</MagnifyImageModalWindowButton>
    </GenericModalWindow>
  );
}
