/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { TShoppingCartProduct } from './actions/shoppingCartActions';

export const loadShoppingCartState = (): any => {
  try {
    const serializedState = localStorage.getItem('shoppingCartState');
    if (serializedState === null) {
      return { shoppingCart: undefined };
    }
    return { shoppingCart: JSON.parse(serializedState) };
  } catch (error) {
    console.error('Error with loading shopping cart state: ', error);

    return { shoppingCart: undefined };
  }
};

export const saveShoppingCartState = (shoppingCartState: TShoppingCartProduct[]): void => {
  try {
    const serializedState: string = JSON.stringify(shoppingCartState);
    localStorage.setItem('shoppingCartState', serializedState);
  } catch (error) {
    console.error('Error with saving shopping cart state: ', error);
  }
};
