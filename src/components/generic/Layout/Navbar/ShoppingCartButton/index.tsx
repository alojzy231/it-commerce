import React from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '@redux/actions/modalActions';
import IconButton from '@generic/buttons/IconButton';

import ShoppingCartButtonContainer from './ShoppingCartButton.styles';
import ShoppingCartContent from './ShoppingCartContent';

export default function ShoppingCartButton(): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = (): void => {
    dispatch(openModal('shoppingCart'));
  };
  return (
    <ShoppingCartButtonContainer>
      <IconButton icon={<ShoppingCartContent />} onClick={handleClick} />
    </ShoppingCartButtonContainer>
  );
}
