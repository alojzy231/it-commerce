import React from 'react';

import { CloseButtonContainer, CloseButtonCrosshair } from './CloseButton.styles';

interface ICloseButton {
  className?: string;
  onClick: () => void;
}

export default function CloseButton({ className, onClick }: ICloseButton): JSX.Element {
  return (
    <CloseButtonContainer className={className} onClick={onClick}>
      <CloseButtonCrosshair />
    </CloseButtonContainer>
  );
}

CloseButton.defaultProps = {
  className: '',
};
