import { TShoppingCartProduct } from '@customTypes/product';

export const ADD_ITEM_TO_SHOPPING_CART = 'shoppingCart/addItem';
export const REMOVE_ITEM_FROM_SHOPPING_CART = 'shoppingCart/removeItem';
export const CHANGE_QUANTITY_OF_ITEM_IN_SHOPPING_CART = 'shoppingCart/changeQuantityOfItem';

type IShoppingCartProduct = {
  product: TShoppingCartProduct;
  newQuantity?: number;
};

export interface IProductShoppingCartAction {
  type: string;
  payload: IShoppingCartProduct;
}

export const addItemToShoppingCart = (
  product: TShoppingCartProduct,
): IProductShoppingCartAction => ({
  type: ADD_ITEM_TO_SHOPPING_CART,
  payload: { product },
});

export const removeItemFromShoppingCart = (
  product: TShoppingCartProduct,
): IProductShoppingCartAction => ({
  type: REMOVE_ITEM_FROM_SHOPPING_CART,
  payload: { product },
});

export const changeQuantityOfItemInShoppingCart = (
  product: TShoppingCartProduct,
  newQuantity: number,
): IProductShoppingCartAction => ({
  type: CHANGE_QUANTITY_OF_ITEM_IN_SHOPPING_CART,
  payload: { product, newQuantity },
});
