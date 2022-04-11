import React, { useEffect, useState } from 'react';
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
  ShoppingCartItemGoToProductPageButton,
  ShoppingCartItemImage,
  ShoppingCartItemName,
  ShoppingCartItemDetails,
  ShoppingCartItemRemove,
  ShoppingCartItemNumberInput,
  ShoppingCartItemPrice,
  ShoppingCartItemTotalPrice,
  ShoppingCartItemSemiBoldtext,
} from './ShoppingCartItem.styles';

interface IShoppingCartItem {
  shoppingCartProduct: TShoppingCartProduct;
  indexInShoppingCart: number;
  handleChangeTotalPrice: (newTotalPrice: number, indexInShoppingCart: number) => void;
}

interface ILocalValues {
  quantity: number;
  totalPriceOfItem: number;
}

export default function ShoppingCartItem({
  shoppingCartProduct,
  indexInShoppingCart,
  handleChangeTotalPrice,
}: IShoppingCartItem): JSX.Element {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    productId,
    productName,
    productImage,
    color,
    size,
    price,
    quantity,
  }: TShoppingCartProduct = shoppingCartProduct;

  const [localValues, setLocalValues] = useState<ILocalValues>({
    quantity,
    totalPriceOfItem: quantity * price,
  });

  useEffect(() => {
    handleChangeTotalPrice(localValues.totalPriceOfItem, indexInShoppingCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageClick = (): void => {
    dispatch(closeModal());
    router.push(`/products/${productId}`);
  };

  const handleQuantityChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const newQuantity: number = parseInt(target.value, 10);

    if (newQuantity >= 0 || Number.isNaN(newQuantity)) {
      setLocalValues((prevState) => ({ ...prevState, quantity: newQuantity }));
    }

    if (newQuantity > 0) {
      const newTotalPrice: number = Number((newQuantity * price).toFixed(2));

      handleChangeTotalPrice(newTotalPrice, indexInShoppingCart);

      setLocalValues((prevState) => ({ ...prevState, totalPriceOfItem: newTotalPrice }));

      dispatch(changeQuantityOfItemInShoppingCart(shoppingCartProduct, newQuantity));
    }
  };

  const handleRemoveShoppingCartItem = (): IProductShoppingCartAction =>
    dispatch(removeItemFromShoppingCart(shoppingCartProduct));

  return (
    <ShoppingCartItemContainer>
      <ShoppingCartItemGoToProductPageButton onClick={handleImageClick}>
        <ShoppingCartItemImage src={productImage.url} alt={productImage.title} />
        <ShoppingCartItemName>{productName}</ShoppingCartItemName>
      </ShoppingCartItemGoToProductPageButton>
      <ShoppingCartItemColumn>
        <ShoppingCartItemDetails>
          <ShoppingCartItemSemiBoldtext>Color:</ShoppingCartItemSemiBoldtext> {color}
        </ShoppingCartItemDetails>
        <ShoppingCartItemDetails>
          <ShoppingCartItemSemiBoldtext>Size:</ShoppingCartItemSemiBoldtext> {size}
        </ShoppingCartItemDetails>
        <ShoppingCartItemDetails>
          <ShoppingCartItemSemiBoldtext>Price:</ShoppingCartItemSemiBoldtext>
          <ShoppingCartItemPrice> {price}$</ShoppingCartItemPrice>
        </ShoppingCartItemDetails>
      </ShoppingCartItemColumn>

      <ShoppingCartItemColumn>
        <ShoppingCartItemDetails isTextCentered>
          <ShoppingCartItemSemiBoldtext>No:</ShoppingCartItemSemiBoldtext>
        </ShoppingCartItemDetails>
        <ShoppingCartItemNumberInput
          onChange={handleQuantityChange}
          value={localValues.quantity || ''}
        />
      </ShoppingCartItemColumn>

      <ShoppingCartItemColumn>
        <ShoppingCartItemDetails isTextCentered>
          <ShoppingCartItemSemiBoldtext>Total price:</ShoppingCartItemSemiBoldtext>
          <ShoppingCartItemTotalPrice>
            {localValues.totalPriceOfItem.toFixed(2)}$
          </ShoppingCartItemTotalPrice>
        </ShoppingCartItemDetails>
      </ShoppingCartItemColumn>

      <ShoppingCartItemRemove onClick={handleRemoveShoppingCartItem}>Remove</ShoppingCartItemRemove>
    </ShoppingCartItemContainer>
  );
}
