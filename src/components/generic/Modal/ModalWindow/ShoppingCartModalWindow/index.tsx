import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';
import { TShoppingCartProduct } from '@customTypes/product';

import GenericModalWindow from '../GenericModalWindow';

import ShoppingCartItem from './ShoppingCartItem';
import {
  ShoppingCartModalItemsContainer,
  ShoppingCartModalItemsNotFound,
  ShoppingCartModalItemsPlaceOrderButton,
  ShoppingCartTotalPrice,
  ShoppingCartTotalPriceValue,
} from './ShoppingCartModalWindow.styles';

export default function ShoppingCartModalWindow(): JSX.Element {
  const shoppingCartItems = useSelector((state: TRootState) => state.shoppingCart);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [shoppingItemsTotalPrices, setShoppingItemsTotalPrices] = useState<number[]>([]);

  useEffect(() => {
    if (shoppingItemsTotalPrices.length > 0) {
      setTotalPrice(
        shoppingItemsTotalPrices.reduce(
          (accumulator: number, currentShoppingItemTotalPrice: number): number =>
            accumulator + currentShoppingItemTotalPrice,
        ),
      );
    }
  }, [shoppingItemsTotalPrices]);

  const handleChangeTotalPrice = (newTotalPrice: number, indexInShoppingCart: number): void => {
    if (shoppingItemsTotalPrices.length - 1 < indexInShoppingCart) {
      setShoppingItemsTotalPrices((prevState: number[]): number[] => [...prevState, newTotalPrice]);
    } else {
      setShoppingItemsTotalPrices((prevState: number[]): number[] =>
        prevState.map((shoppingCartItemTotalPrice: number, index: number): number =>
          index === indexInShoppingCart ? newTotalPrice : shoppingCartItemTotalPrice,
        ),
      );
    }
  };

  return (
    <GenericModalWindow title="Shopping cart">
      <ShoppingCartModalItemsContainer>
        {shoppingCartItems.length > 0 ? (
          <>
            {shoppingCartItems.map(
              (
                shoppingCartItem: TShoppingCartProduct,
                indexInShoppingCart: number,
              ): JSX.Element => (
                <ShoppingCartItem
                  shoppingCartProduct={shoppingCartItem}
                  indexInShoppingCart={indexInShoppingCart}
                  handleChangeTotalPrice={handleChangeTotalPrice}
                  key={`${shoppingCartItem.productId}-${shoppingCartItem.size}-${shoppingCartItem.color}`}
                />
              ),
            )}
            <ShoppingCartTotalPrice>
              Total:{' '}
              <ShoppingCartTotalPriceValue>{totalPrice.toFixed(2)}$</ShoppingCartTotalPriceValue>
            </ShoppingCartTotalPrice>
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
