import React from 'react';

import {
  HighlightedTitleBackground,
  HighlightTitleContent,
  HighlightedTitleContainer,
} from './HighlightedTitle.styles';

interface IHighlightedTitle {
  children: React.ReactChild;
  className?: string;
}

export default function HighlightedTitle({ children, className }: IHighlightedTitle): JSX.Element {
  return (
    <HighlightedTitleContainer className={className}>
      <HighlightTitleContent>{children}</HighlightTitleContent>
      <HighlightedTitleBackground />
    </HighlightedTitleContainer>
  );
}

HighlightedTitle.defaultProps = {
  className: '',
};
