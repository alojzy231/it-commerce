import React from 'react';

import {
  HighlightedTitleBackground,
  HighlightTitleContent,
  HighlightedTitleContainer,
} from './HighlightedTitle.styles';

interface IHighlightedTitle {
  children: React.ReactChild;
}

export default function HighlightedTitle({ children }: IHighlightedTitle): JSX.Element {
  return (
    <HighlightedTitleContainer>
      <HighlightTitleContent>{children}</HighlightTitleContent>
      <HighlightedTitleBackground />
    </HighlightedTitleContainer>
  );
}
