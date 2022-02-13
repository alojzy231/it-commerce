import React from 'react';

import CloseIcon from '@icons/CloseIcon';

import ShoppingCartButton from '../ShoppingCartButton';
import AccountButton from '../AccountButton';

import {
  SidebarCloseButton,
  SidebarBackground,
  SidebarContainer,
  SidebarTopRow,
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
          <AccountButton />
        </SidebarTopRow>
      </SidebarContainer>
      <SidebarBackground onClick={closeSidebar} isOpened={isOpened} />
    </>
  );
}
