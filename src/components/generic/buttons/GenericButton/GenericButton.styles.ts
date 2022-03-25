import styled from 'styled-components';

import { Header5 } from '@styles/typography';

export const GenericButtonContainer = styled.button`
  padding: 0.4rem 2rem;

  display: block;

  box-shadow: inset 0px 4px 0px rgba(255, 255, 255, 0.25);

  border: none;
  border-radius: 1rem;

  outline: none;

  text-align: center;

  background-color: ${({ theme: { colors } }): string => colors.secondary};

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    padding: 0.4rem 1.4rem;
  }
`;
export const GenericButtonText = styled.h4`
  color: ${({ theme: { colors } }): string => colors.white};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
