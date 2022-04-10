import React from 'react';
import { useSelector } from 'react-redux';

import { TRootState } from '@redux/reducers';
import ShoppingCartIcon from '@icons/ShoppingCartIcon';

import ShoppingCartButtonNumberOfItems from './ShoppinCart.styles';

export default function ShoppingCartContent(): JSX.Element {
  const shoppinCartItems = useSelector((state: TRootState) => state.shoppingCart);

  return (
    <>
      <ShoppingCartIcon />
      {shoppinCartItems.length > 0 && (
        <ShoppingCartButtonNumberOfItems>{shoppinCartItems.length}</ShoppingCartButtonNumberOfItems>
      )}
    </>
  );
}
