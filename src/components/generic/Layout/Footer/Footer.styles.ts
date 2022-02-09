import styled from 'styled-components';

import { Header6 } from '@styles/typography';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 12.8rem;

  background-color: ${({ theme: { colors } }): string => colors.primary};

  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { medias } }): string => medias.desktop};

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    padding: 6.1rem;
  }
`;

export const FooterText = styled.h5`
  text-align: center;
  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    ${Header6};
  }
`;

export const FooterPortfolioLink = styled.a`
  color: ${({ theme: { colors } }): string => colors.black};

  font-weight: bold;
  text-decoration: none;

  white-space: nowrap;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`;
