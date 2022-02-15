import React from 'react';
import Link from 'next/link';

import { TSubpage } from '@consts/pagesNames';

import {
  NavbarPageLinkName,
  NavbarPageLinkWrapper,
  NavbarPageLinkSubmenu,
  NavbarPageLinkContainer,
  NavbarPageLinkChaviconIcon,
} from './NavbarPageLink.styles';

export interface INavbarPageLink {
  isSidebar: boolean;
  href: string;
  children: React.ReactNode;
  subpages?: TSubpage[];
}

export default function NavbarPageLink({
  isSidebar,
  href,
  children,
  subpages,
}: INavbarPageLink): JSX.Element {
  const showSubmenu = subpages?.length !== 0;
  const showChaviconDown = isSidebar && showSubmenu;

  return (
    <NavbarPageLinkWrapper isSidebar={isSidebar}>
      <NavbarPageLinkContainer>
        <Link href={href} passHref>
          <NavbarPageLinkName>{children}</NavbarPageLinkName>
        </Link>
        {showChaviconDown && <NavbarPageLinkChaviconIcon />}
      </NavbarPageLinkContainer>

      {showSubmenu && <NavbarPageLinkSubmenu subpages={subpages} />}
    </NavbarPageLinkWrapper>
  );
}

NavbarPageLink.defaultProps = {
  isSidebar: false,
  subpages: [],
};
