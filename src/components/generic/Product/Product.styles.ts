import styled from 'styled-components';

import NumberInput from '@generic/inputs/NumberInput.styles';
import { Header1, Header2, Header3, Header4, Header5 } from '@styles/typography';
import GenericButton from '@generic/buttons/GenericButton';

interface IProductPrice {
  productIsOnSale: boolean;
}

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
export const ProductHeaderOnHomepage = styled.h2`
  max-width: 73.5rem;

  margin-bottom: 6.4rem;

  ${Header1};

  @media (max-width: ${({ theme: { medias } }): string => medias.bigMobile}) {
    ${Header2};
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 2.4rem;

    ${Header4};
    font-weight: bold;
  }
`;
export const ProductName = styled.h1`
  max-width: 73.5rem;

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
export const ProductSeeProductButton = styled.a`
  width: fit-content;

  margin-top: 2.4rem;
  margin-left: auto;

  display: block;

  text-decoration: none;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 1.4rem;
  }
`;

export const ProductPrice = styled.h3<IProductPrice>`
  margin-left: ${({ productIsOnSale }): string => (productIsOnSale ? '2rem' : 'auto')};

  font-weight: 500;

  color: ${({ theme: { colors }, productIsOnSale }): string =>
    productIsOnSale ? colors.selected : colors.secondary};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header4};
    font-weight: 500;
  }
`;
export const ProductOldPrice = styled.h4`
  margin: auto 0 auto auto;

  text-decoration: line-through;

  color: ${({ theme: { colors } }): string => colors.secondary};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export const ProductDetailsSection = styled.div`
  width: 53rem;
  margin: 0 auto;

  position: relative;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 87%;
  }
`;
export const ProductDetailsPriceRow = styled.div`
  margin-top: 2.4rem;

  display: flex;
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 2rem;
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
    margin: 2rem auto 0 auto;
  }
`;
export const ProductInputQuantityNumber = styled(NumberInput)`
  width: 10.2rem;
`;
