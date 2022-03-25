import styled from 'styled-components';

import CrosshairIcon from '@icons/CrosshairIcon';

export const CloseButtonContainer = styled.button`
  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;

  outline: none;
  border: none;

  border-radius: 0.8rem;

  box-shadow: inset 4px 4px 6px 4px rgba(255, 255, 255, 0.25);

  background-color: ${({ theme: { colors } }): string => colors.closeButton};

  &:hover {
    filter: grayscale(10%);
    cursor: pointer;
  }

  &:active {
    filter: grayscale(20%);
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
export const CloseButtonCrosshair = styled(CrosshairIcon)`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 2rem;
    height: 2rem;
  }
`;
