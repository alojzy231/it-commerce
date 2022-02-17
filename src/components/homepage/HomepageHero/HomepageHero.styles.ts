import styled, { keyframes } from 'styled-components';

import { Header2, Header3, Header4, Header5 } from '@styles/typography';

export const HomepageHeroContainer = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;

  background-color: ${({ theme: { colors } }): string => colors.white};

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    flex-direction: column-reverse;
    align-items: normal;
  }
`;

export const HomepageHeroImage = styled.img`
  width: 42%;

  margin-left: auto;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    width: 69rem;
    margin-right: auto;
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 100%;
  }
`;

export const HomepageHeroTextContainer = styled.div`
  margin-left: 7.2rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    width: 69rem;
    margin: 3rem auto;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 24rem;
  }
`;

export const HomepageHeroTitle = styled.h1`
  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    ${Header2};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header4};

    font-weight: bold;
  }
`;
export const HomepageHeroSubtitleContainer = styled.div`
  display: flex;
`;
export const HomepageHeroSubtitleText = styled.h2`
  font-weight: normal;
  white-space: pre;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    ${Header3};
    font-weight: normal;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

const blinkingAnimation = keyframes`

    to{
        visibility: hidden;

    }
`;

export const HomepageHeroSubtitleInsertionPoint = styled.span`
  width: 0.2rem;
  height: auto;

  background-color: ${({ theme: { colors } }): string => colors.black};

  animation: ${blinkingAnimation} 1.5s steps(5, start) infinite;
`;
