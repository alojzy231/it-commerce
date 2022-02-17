import styled, { keyframes } from 'styled-components';

export const HomepageHeroContainer = styled.header`
  width: 100%;
  height: 39.4rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme: { colors } }): string => colors.white};
`;

export const HomepageHeroImage = styled.img`
  height: 100%;

  margin-left: auto;
`;

export const HomepageHeroTextContainer = styled.div`
  margin-left: 7.2rem;
`;

export const HomepageHeroTitle = styled.h1``;
export const HomepageHeroSubtitleContainer = styled.div`
  display: flex;
`;
export const HomepageHeroSubtitleText = styled.h2`
  font-weight: normal;
  white-space: pre;
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
