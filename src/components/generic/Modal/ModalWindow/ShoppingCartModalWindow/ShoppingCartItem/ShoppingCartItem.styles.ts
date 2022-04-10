import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';
import NumberInput from '@generic/inputs/NumberInput.styles';

interface IShoppingCartItemDetails {
  isQuantityColumn?: boolean;
}

export const ShoppingCartItemContainer = styled.li`
  width: 100%;
  height: max-content;

  display: flex;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

  &:first-child {
    border-top: 0.1rem solid ${({ theme: { colors } }): string => colors.black};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ShoppingCartItemColumn = styled.div`
  margin: 0 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ShoppingCartItemGoToProductPage = styled.button`
  margin-right: 1rem;

  display: flex;
  align-items: center;

  border: none;
  outline: none;

  background-color: transparent;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    display: block;
    margin: auto 0.6rem auto 0;
  }
`;

export const ShoppingCartItemImage = styled.img`
  height: 10rem;
  aspect-ratio: 1 / 1;

  margin: 1rem 0;

  object-fit: cover;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 2rem;
  }
`;
export const ShoppingCartItemName = styled.h4`
  max-width: 20rem;

  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;
export const ShoppingCartItemDetails = styled.h5<IShoppingCartItemDetails>`
  ${({ isQuantityColumn }): string => (isQuantityColumn ? 'text-align: center;' : '')};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header6};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    margin: 1rem 0;

    text-align: center;
  }
`;

export const ShoppingCartItemNumberInput = styled(NumberInput)`
  width: 10rem;
  margin: 1rem auto 0;

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    margin-left: 0;
  }
`;

export const ShoppingCartItemRemove = styled.button`
  margin: 0 1rem;

  ${Header5};
  text-decoration: underline;

  border: none;
  outline: none;

  color: ${({ theme: { colors } }): string => colors.selected};
  background-color: transparent;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header6};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.smallMobile}) {
    margin: 1rem 0;

    text-align: center;
  }
`;
