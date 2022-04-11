import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';
import NumberInput from '@generic/inputs/NumberInput.styles';

interface IShoppingCartItemDetails {
  isTextCentered?: boolean;
}

export const ShoppingCartItemSemiBoldtext = styled.span`
  font-weight: 600;
`;

export const ShoppingCartItemContainer = styled.li`
  width: 100%;
  height: max-content;

  display: flex;
  justify-content: space-between;

  border-bottom: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

  &:first-child {
    border-top: 0.1rem solid ${({ theme: { colors } }): string => colors.black};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
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

export const ShoppingCartItemGoToProductPageButton = styled.button`
  margin-right: 0.2rem;

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
    width: 15.5rem;

    margin: auto 0.6rem auto 0;

    display: block;
  }
`;

export const ShoppingCartItemImage = styled.img`
  height: 9rem;
  aspect-ratio: 1 / 1;

  margin: 1rem 0;

  object-fit: cover;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-top: 2rem;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
    height: 20rem;
  }
`;
export const ShoppingCartItemName = styled.h4`
  max-width: 20rem;

  margin-left: 0.5rem;

  font-weight: bold;
  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
    font-weight: bold;
  }
`;
export const ShoppingCartItemDetails = styled.h5<IShoppingCartItemDetails>`
  ${({ isTextCentered }): string => (isTextCentered ? 'text-align: center;' : '')};

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header6};
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
    margin: 1rem 0;

    text-align: center;
  }
`;

export const ShoppingCartItemNumberInput = styled(NumberInput)`
  width: 9rem;

  margin: 1rem auto 0;

  ${Header5};

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
    margin-left: 0;
  }
`;

export const ShoppingCartItemPrice = styled.span`
  color: ${({ theme: { colors } }): string => colors.secondary};
`;
export const ShoppingCartItemTotalPrice = styled.span`
  display: block;

  font-weight: bold;

  text-align: center;

  color: ${({ theme: { colors } }): string => colors.selected};
`;

export const ShoppingCartItemRemove = styled.button`
  height: fit-content;
  margin: auto 0;

  ${Header6};
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

  @media (max-width: ${({ theme: { medias } }): string => medias.mediumMobile}) {
    margin: 1rem 0;

    text-align: center;
  }
`;
