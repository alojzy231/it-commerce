import { Reducer } from 'react';

import { TShoppingCartProduct } from '@customTypes/product';
import {
  ADD_ITEM_TO_SHOPPING_CART,
  CHANGE_QUANTITY_OF_ITEM_IN_SHOPPING_CART,
  IProductShoppingCartAction,
  REMOVE_ITEM_FROM_SHOPPING_CART,
} from '@redux/actions/shoppingCartActions';

const initialState: TShoppingCartProduct[] | null = [];

const removeItem = (
  shoppingCartState: TShoppingCartProduct[],
  removeProduct: TShoppingCartProduct,
): TShoppingCartProduct[] =>
  shoppingCartState.filter(
    (product) =>
      !(
        product.productId === removeProduct.productId &&
        product.size === removeProduct.size &&
        product.color === removeProduct.color
      ),
  );
const changeQuantityOfItem = (
  shoppingCartState: TShoppingCartProduct[],
  changedProduct: TShoppingCartProduct,
  newQuantity: number,
): TShoppingCartProduct[] => {
  const newState: TShoppingCartProduct[] = [...shoppingCartState];

  const index = newState.findIndex((product) => product.productId === changedProduct.productId);

  newState[index].quantity = newQuantity;

  return [...newState];
};

const addItem = (
  shoppingCartState: TShoppingCartProduct[],
  newProduct: TShoppingCartProduct,
): TShoppingCartProduct[] => {
  const newState: TShoppingCartProduct[] = [...shoppingCartState];
  const index = newState.findIndex(
    (product) =>
      product.productId === newProduct.productId &&
      product.size === newProduct.size &&
      product.color === newProduct.color,
  );

  if (index === -1) {
    return [...newState, newProduct];
  }
  const val1: number = newProduct.quantity || 1;
  const val2: number = newState[index].quantity || 1;
  const newQuantity = val1 + val2;

  newState[index].quantity = newQuantity;

  return [...newState];
};

const shoppingCartReducer: Reducer<TShoppingCartProduct[], IProductShoppingCartAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ADD_ITEM_TO_SHOPPING_CART:
      return addItem(state, action.payload.product);
    case REMOVE_ITEM_FROM_SHOPPING_CART:
      return removeItem(state, action.payload.product);
    case CHANGE_QUANTITY_OF_ITEM_IN_SHOPPING_CART:
      return changeQuantityOfItem(state, action.payload.product, action.payload.newQuantity || 1);
    default:
      return state;
  }
};

export default shoppingCartReducer;
