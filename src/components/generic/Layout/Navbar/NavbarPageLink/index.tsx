import React from 'react';
import Link from 'next/link';

import { TSubpage } from '@consts/pagesNames';

import {
  NavbarPageLinkName,
  NavbarPageLinkContainer,
  NavbarPageLinkSubmenu,
} from './NavbarPageLink.styles';

interface INavbarPageLink {
  href: string;
  children: React.ReactNode;
  subpages?: TSubpage[];
}

export default function NavbarPageLink({ href, children, subpages }: INavbarPageLink): JSX.Element {
  const showSubmenu = subpages?.length !== 0;

  return (
    <NavbarPageLinkContainer>
      <Link href={href} passHref>
        <NavbarPageLinkName>{children}</NavbarPageLinkName>
      </Link>
      {showSubmenu && <NavbarPageLinkSubmenu subpages={subpages} />}
    </NavbarPageLinkContainer>
  );
}

NavbarPageLink.defaultProps = {
  subpages: [],
};
