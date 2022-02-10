import React from 'react';

import HamburgerIcon from '@icons/HamburgerIcon';
import IconButton from '@generic/IconButton';

import HamburgerMenuContainer from './HamburgerMenu.styles';

export default function HamburgerMenu(): JSX.Element {
  const handleClick = (): void => {};

  return (
    <HamburgerMenuContainer>
      <IconButton icon={<HamburgerIcon />} onClick={handleClick} />
    </HamburgerMenuContainer>
  );
}
