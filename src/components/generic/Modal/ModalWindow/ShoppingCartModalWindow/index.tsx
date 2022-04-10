import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';

import GenericModalWindow from '../GenericModalWindow';

import ShoppingCartItem from './ShoppingCartItem';
import {
  ShoppingCartModalItemsContainer,
  ShoppingCartModalItemsNotFound,
  ShoppingCartModalItemsPlaceOrderButton,
} from './ShoppingCartModalWindow.styles';

export default function ShoppingCartModalWindow(): JSX.Element {
  const shoppinCartItems = useSelector((state: TRootState) => state.shoppingCart);

  return (
    <GenericModalWindow title="Shopping cart">
      <ShoppingCartModalItemsContainer>
        {shoppinCartItems.length > 0 ? (
          <>
            {shoppinCartItems.map(
              (shoppingCartItem): JSX.Element => (
                <ShoppingCartItem
                  shoppingCartProduct={shoppingCartItem}
                  key={`${shoppingCartItem.productId}-${shoppingCartItem.size}-${shoppingCartItem.color}`}
                />
              ),
            )}
            <ShoppingCartModalItemsPlaceOrderButton>
              Place order
            </ShoppingCartModalItemsPlaceOrderButton>
          </>
        ) : (
          <ShoppingCartModalItemsNotFound>Shopping cart empty</ShoppingCartModalItemsNotFound>
        )}
      </ShoppingCartModalItemsContainer>
    </GenericModalWindow>
  );
}
