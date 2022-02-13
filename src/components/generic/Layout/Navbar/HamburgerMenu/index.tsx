import React, { useState } from 'react';

import HamburgerIcon from '@icons/HamburgerIcon';
import IconButton from '@generic/IconButton';

import Sidebar from '../Sidebar';

import HamburgerMenuContainer from './HamburgerMenu.styles';

export default function HamburgerMenu(): JSX.Element {
  const [isSidebarOpened, toggleIsSidebarOpened] = useState<boolean>(false);

  const handleOpenSidebar = (): void => toggleIsSidebarOpened(true);
  const handleCloseSidebar = (): void => toggleIsSidebarOpened(false);

  return (
    <>
      <Sidebar isOpened={isSidebarOpened} closeSidebar={handleCloseSidebar} />
      <HamburgerMenuContainer>
        <IconButton icon={<HamburgerIcon />} onClick={handleOpenSidebar} />
      </HamburgerMenuContainer>
    </>
  );
}
