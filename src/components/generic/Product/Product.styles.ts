import styled from 'styled-components';

import { Header2, Header3, Header4, Header5 } from '@styles/typography';
import GenericButton from '@generic/buttons/GenericButton';

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
  margin-bottom: 6.4rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.bigMobile}) {
    ${Header2};
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 2.4rem;

    ${Header4};
    font-weight: bold;
  }
`;
export const ProductNameOnHomepage = styled.h2`
  width: 53rem;
  margin: 0 auto;
  @media (max-width: ${({ theme: { medias } }): string => medias.bigMobile}) {
    ${Header3};
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 87%;

    ${Header5};
    font-weight: bold;
  }
`;
export const ProductSeeProductButton = styled(GenericButton)`
  margin-top: 2.4rem;
  margin-left: auto;

  display: block;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 1.4rem;
  }
`;
export const ProductDetailsSection = styled.div`
  width: 53rem;
  margin: 0 auto;
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 87%;
  }
`;
export const ProductDetailsSectionRow = styled.div`
  margin-top: 2.4rem;

  display: flex;
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 2rem;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;
export const ProductDescription = styled.h4`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ProductGenericButton = styled(GenericButton)`
  margin-left: auto;

  @media (max-width: 420px) {
    margin: 2rem auto 0;
  }
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

  &:hover {
    color: ${({ theme: { colors } }): string => colors.selected};
    border-color: ${({ theme: { colors } }): string => colors.selected};

    cursor: pointer;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ProductInputSelectOption = styled.option``;
