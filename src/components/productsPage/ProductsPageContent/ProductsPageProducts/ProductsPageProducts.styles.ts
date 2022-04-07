import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';

interface IProductPrice {
  productIsOnSale: boolean;
}

export const ProductsPageProductsContainer = styled.div`
  margin-bottom: 12.8rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 6.4rem;

    grid-template-columns: 1fr;
  }
`;

export const ProductsPageProductWrapper = styled.a`
  margin: 5%;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  position: relative;

  outline: none;
  border: none;

  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme: { colors } }): string => colors.black};
  text-decoration: none;

  cursor: pointer;

  transition: 0.3s ease;

  &:hover {
    box-shadow: 12px 12px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    outline: 0.1rem solid ${({ theme: { colors } }): string => colors.secondary};
  }
`;
export const ProductsPageProductName = styled.h4`
  margin: auto;

  font-weight: bold;
  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    ${Header5};
    font-weight: bold;
  }
`;

export const ProductsPageProductPriceRow = styled.div`
  display: flex;
`;
export const ProductsPageProductOldPrice = styled.h5`
  margin: auto 2rem auto auto;

  text-decoration: line-through;

  color: ${({ theme: { colors } }): string => colors.secondary};

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    ${Header6};
    margin-right: 1rem;
  }
`;
export const ProductsPageProductPrice = styled.h4<IProductPrice>`
  margin-left: ${({ productIsOnSale }): string => (productIsOnSale ? '0' : 'auto')};

  font-weight: 500;

  color: ${({ theme: { colors }, productIsOnSale }): string =>
    productIsOnSale ? colors.selected : colors.secondary};

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    ${Header5};
    font-weight: 500;
  }
`;
