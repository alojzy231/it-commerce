import styled from 'styled-components';

export const HighlightedTitleContainer = styled.div`
  width: fit-content;
  height: auto;

  position: relative;
  z-index: 0;
`;
export const HighlightTitleContent = styled.div`
  position: relative;
  z-index: 1;
`;
export const HighlightedTitleBackground = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 40%;
  right: 2rem;
  z-index: 0;

  background-color: ${({ theme: { colors } }): string => colors.yellow};
`;
