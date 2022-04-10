import React from 'react';

import CloseIcon from '@icons/CloseIcon';
import PAGES_NAMES from '@consts/pagesNames';

import ShoppingCartButton from '../ShoppingCartButton';
import NavbarPageLink from '../NavbarPageLink';

import {
  SidebarCloseButton,
  SidebarBackground,
  SidebarContainer,
  SidebarTopRow,
  SidebarPagesLinksContainer,
} from './Sidbar.styles';

interface ISidebar {
  isOpened: boolean;
  closeSidebar: () => void;
}

export default function Sidebar({ isOpened, closeSidebar }: ISidebar): JSX.Element {
  return (
    <>
      <SidebarContainer isOpened={isOpened}>
        <SidebarTopRow>
          <SidebarCloseButton icon={<CloseIcon />} onClick={closeSidebar} />

          <ShoppingCartButton />
        </SidebarTopRow>
        <SidebarPagesLinksContainer>
          {PAGES_NAMES.map(({ name, url, subpages }) => (
            <NavbarPageLink isSidebar href={url} subpages={subpages} key={name}>
              {name}
            </NavbarPageLink>
          ))}
        </SidebarPagesLinksContainer>
      </SidebarContainer>
      <SidebarBackground onClick={closeSidebar} isOpened={isOpened} />
    </>
  );
}
