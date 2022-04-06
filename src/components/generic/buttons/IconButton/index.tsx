import React from 'react';

import StyledIconButton from './IconButton.styles';

interface IIconButton {
  className?: string;
  icon: React.ReactNode;
  onClick: () => void;
}

export default function IconButton({ className, icon, onClick }: IIconButton): JSX.Element {
  return (
    <StyledIconButton className={className} type="button" onClick={onClick}>
      {icon}
    </StyledIconButton>
  );
}

IconButton.defaultProps = {
  className: '',
};
