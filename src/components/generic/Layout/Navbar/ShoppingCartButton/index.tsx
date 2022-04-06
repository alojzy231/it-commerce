import React from 'react';

import ShoppingCartIcon from '@icons/ShoppingCartIcon';
import IconButton from '@generic/buttons/IconButton';

import ShoppingCartButtonContainer from './ShoppingCartButton.styles';

export default function ShoppingCartButton(): JSX.Element {
  const handleClick = (): void => {};
  return (
    <ShoppingCartButtonContainer>
      <IconButton icon={<ShoppingCartIcon />} onClick={handleClick} />
    </ShoppingCartButtonContainer>
  );
}
