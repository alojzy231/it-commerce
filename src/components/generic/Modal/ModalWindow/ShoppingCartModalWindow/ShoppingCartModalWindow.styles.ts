import styled from 'styled-components';

import { Header4 } from '@styles/typography';
import GenericButton from '@generic/buttons/GenericButton';

export const ShoppingCartModalItemsContainer = styled.ul`
  list-style: none;
`;
export const ShoppingCartModalItemsNotFound = styled.h3`
  margin: 2rem 1rem;
  font-weight: normal;

  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header4};
  }
`;
export const ShoppingCartModalItemsPlaceOrderButton = styled(GenericButton)`
  margin: 2rem 0 2rem auto;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 100%;
  }
`;

export const ShoppingCartTotalPrice = styled.h3`
  text-align: right;

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
    ${Header4};

    font-weight: bold;
  }
`;
export const ShoppingCartTotalPriceValue = styled.span`
  color: ${({ theme: { colors } }): string => colors.selected};
`;
