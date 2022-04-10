import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { TShoppingCartProduct } from '@customTypes/product';
import { closeModal } from '@redux/actions/modalActions';
import {
  changeQuantityOfItemInShoppingCart,
  IProductShoppingCartAction,
  removeItemFromShoppingCart,
} from '@redux/actions/shoppingCartActions';

import {
  ShoppingCartItemContainer,
  ShoppingCartItemColumn,
  ShoppingCartItemGoToProductPage,
  ShoppingCartItemImage,
  ShoppingCartItemName,
  ShoppingCartItemDetails,
  ShoppingCartItemRemove,
  ShoppingCartItemNumberInput,
} from './ShoppingCartItem.styles';

interface IShoppingCartItem {
  shoppingCartProduct: TShoppingCartProduct;
}

export default function ShoppingCartItem({ shoppingCartProduct }: IShoppingCartItem): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const { productId, productName, productImage, color, size, quantity }: TShoppingCartProduct =
    shoppingCartProduct;

  const [localQuantity, setLocalQuantity] = useState<number>(quantity);

  const handleImageClick = (): void => {
    dispatch(closeModal());
    router.push(`/products/${productId}`);
  };

  const handleQuantityChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuantity: number = parseInt(target.value, 10);

    if (newQuantity >= 0 || Number.isNaN(newQuantity)) {
      setLocalQuantity(newQuantity);
    }

    if (newQuantity > 0) {
      dispatch(changeQuantityOfItemInShoppingCart(shoppingCartProduct, newQuantity));
    }
  };

  const handleRemoveShoppingCartItem = (): IProductShoppingCartAction =>
    dispatch(removeItemFromShoppingCart(shoppingCartProduct));

  return (
    <ShoppingCartItemContainer>
      <ShoppingCartItemGoToProductPage onClick={handleImageClick}>
        <ShoppingCartItemImage src={productImage.url} alt={productImage.title} />
        <ShoppingCartItemName>{productName}</ShoppingCartItemName>
      </ShoppingCartItemGoToProductPage>
      <ShoppingCartItemColumn>
        <ShoppingCartItemDetails>Color: {color}</ShoppingCartItemDetails>
        <ShoppingCartItemDetails>Size: {size}</ShoppingCartItemDetails>
      </ShoppingCartItemColumn>

      <ShoppingCartItemColumn>
        <ShoppingCartItemDetails isQuantityColumn>Quantity: </ShoppingCartItemDetails>
        <ShoppingCartItemNumberInput onChange={handleQuantityChange} value={localQuantity || ''} />
      </ShoppingCartItemColumn>

      <ShoppingCartItemRemove onClick={handleRemoveShoppingCartItem}>Remove</ShoppingCartItemRemove>
    </ShoppingCartItemContainer>
  );
}
