import React from 'react';

import { GenericButtonContainer, GenericButtonText } from './GenericButton.styles';

interface IGenericButton {
  className?: string;
  children: React.ReactChild;
  onClick: () => void;
}

export default function GenericButton({
  className,
  children,
  onClick,
}: IGenericButton): JSX.Element {
  return (
    <GenericButtonContainer className={className} onClick={onClick}>
      <GenericButtonText>{children}</GenericButtonText>
    </GenericButtonContainer>
  );
}

GenericButton.defaultProps = {
  className: '',
};
