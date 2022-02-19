import styled from 'styled-components';

import { Header4, Header5 } from '@styles/typography';

export const HomepageAboutUsContainer = styled.section`
  width: 100%;

  margin-bottom: 6.4rem;
  padding: 0 6.4rem;

  display: flex;

  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    padding: 0;

    flex-direction: column;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 4.8rem;
  }
`;
export const HomepageAboutUsTextContent = styled.div`
  margin-right: 6rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    margin: 0 0 6.4rem;
    padding: 4.2rem;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 2rem;
  }
`;
export const HomepageAboutUsTitle = styled.h2`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header4};
    font-weight: bold;
  }
`;
export const HomepageAboutUsText = styled.div`
  min-width: 60rem;

  margin-top: 3.3rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    min-width: auto;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 2.4rem;
  }
`;
export const HomepageAboutUsTextParagraph = styled.p`
  margin-bottom: 1em;
  ${Header4};

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const HomepageAboutUsTextCompanyName = styled.span`
  white-space: nowrap;
`;
export const HomepageAboutUsImage = styled.img`
  width: 54rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 80%;
  }
`;
