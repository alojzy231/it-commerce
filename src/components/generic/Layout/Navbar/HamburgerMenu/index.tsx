import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HamburgerIcon from '@icons/HamburgerIcon';
import IconButton from '@generic/buttons/IconButton';

import Sidebar from '../Sidebar';

import HamburgerMenuContainer from './HamburgerMenu.styles';

export default function HamburgerMenu(): JSX.Element {
  const router = useRouter();
  const [isSidebarOpened, toggleIsSidebarOpened] = useState<boolean>(false);

  useEffect(() => {
    toggleIsSidebarOpened(false);
  }, [router]);

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
