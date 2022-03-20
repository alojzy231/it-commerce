import React from 'react';

import { GenericButtonContainer, GenericButtonText } from './GenericButton.styles';

interface IGenericButton {
  children: React.ReactChild;
  onClick: () => void;
}

export default function GenericButton({ children, onClick }: IGenericButton): JSX.Element {
  return (
    <GenericButtonContainer onClick={onClick}>
      <GenericButtonText>{children}</GenericButtonText>
    </GenericButtonContainer>
  );
}
