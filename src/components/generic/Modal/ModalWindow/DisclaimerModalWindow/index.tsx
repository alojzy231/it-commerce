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
    <GenericModalWindow title="Disclaimer">
      <DisclaimerModalWindowTitle>Information</DisclaimerModalWindowTitle>
      <DisclaimerModalWindowText>
        All images come from the Internet and their source addresses are included in their alt
        attribute.
      </DisclaimerModalWindowText>
      <DisclaimerModalWindowText>
        The website is almost fully functional: you can search and filter products, also you can add
        them to the shopping cart (you can walk through all stages you would on a normal e-commerce
        website down to placing order).
      </DisclaimerModalWindowText>
      <DisclaimerModalWindowButton onClick={handleCloseModal}>OK</DisclaimerModalWindowButton>
    </GenericModalWindow>
  );
}
