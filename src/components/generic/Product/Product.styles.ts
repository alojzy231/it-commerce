import styled from 'styled-components';

import { Header2, Header4, Header5 } from '@styles/typography';

export const ProductContainer = styled.article`
  margin: 6.4rem 1.6rem;

  display: flex;
  justify-content: center;
  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin: 3.2rem 1.4rem;
  }
`;
export const ProductContentSection = styled.div`
  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    margin-bottom: 6.4rem;
  }
`;
export const ProductName = styled.h1`
  @media (max-width: ${({ theme: { medias } }): string => medias.bigMobile}) {
    ${Header2};
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header4};
    font-weight: bold;
  }
`;
export const ProductDetailsSection = styled.div`
  width: 53rem;

  margin: 6.4rem auto 0;
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 3.2rem;
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 87%;
  }
`;
export const ProductDescription = styled.h4`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ProductInputSection = styled.div`
  margin-top: 2.4rem;
`;
export const ProductInputLabel = styled.label`
  ${Header4};
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ProductInputSelect = styled.select`
  padding: 0 2rem;
  margin-left: 1.6rem;

  ${Header4};

  color: ${({ theme: { colors } }): string => colors.secondary};

  border-radius: 2.4rem;
  border-color: ${({ theme: { colors } }): string => colors.secondary};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ProductInputSelectOption = styled.option``;
