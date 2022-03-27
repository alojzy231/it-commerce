import styled, { keyframes } from 'styled-components';

import { Header5 } from '@styles/typography';

const slideInAnimation = keyframes`
  0%{
  transform: translateY(-100%);

  }

  100%{
      transform: translateY(0%);

  }
`;

export const GenericModalWindowContainer = styled.div`
  max-width: 88rem;
  min-width: 20rem;

  margin: 2rem auto;

  position: relative;
  z-index: 1;

  animation: ${slideInAnimation} 0.3s ease-out;

  border-radius: 3rem 3rem 0 0;
`;

export const GenericModalWindowHeader = styled.div`
  width: 100%;
  min-height: 7rem;

  display: grid;
  grid-template: 1fr / 6.4rem auto 6.4rem;
  align-items: center;

  border-radius: 3rem 3rem 0 0;

  background: linear-gradient(180deg, #1660e8 0%, #376ea7 100%);

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    grid-template: 1fr / 4.8rem auto 4.8rem;
  }
`;
export const GenericModalWindowHeaderTitle = styled.h4`
  grid-column: 2;

  text-align: center;
  color: ${({ theme: { colors } }): string => colors.white};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const GenericModalWindowContentContainer = styled.div`
  width: 100%;

  padding: 2rem;

  border: 0.3rem solid ${({ theme: { colors } }): string => colors.secondary};

  background-color: ${({ theme: { colors } }): string => colors.primary};
`;
