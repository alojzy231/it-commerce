import React from 'react';

import IconButton from '@generic/buttons/IconButton';

import ShoppingCartButtonContainer from './ShoppingCartButton.styles';
import ShoppingCartContent from './ShoppingCartContent';

export default function ShoppingCartButton(): JSX.Element {
  const handleClick = (): void => {};
  return (
    <ShoppingCartButtonContainer>
      <IconButton icon={<ShoppingCartContent />} onClick={handleClick} />
    </ShoppingCartButtonContainer>
  );
}
