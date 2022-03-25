import React from 'react';

import GenericModalWindow from '../GenericModalWindow';

import {
  DisclaimerModalWindowTitle,
  DisclaimerModalWindowText,
  DisclaimerModalWindowButton,
} from './DisclaimerModalWindow.styles';

interface IDisclaimerModalWindow {
  handleCloseModal: () => void;
}

export default function DisclaimerModalWindow({
  handleCloseModal,
}: IDisclaimerModalWindow): JSX.Element {
  return (
    <GenericModalWindow>
      <DisclaimerModalWindowTitle>Information</DisclaimerModalWindowTitle>
      <DisclaimerModalWindowText>
        All images come from the Internet and their source addresses are included in their alt
        attribute.
      </DisclaimerModalWindowText>
      <DisclaimerModalWindowButton onClick={handleCloseModal}>OK</DisclaimerModalWindowButton>
    </GenericModalWindow>
  );
}
