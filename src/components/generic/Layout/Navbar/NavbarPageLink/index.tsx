import React from 'react';
import Link from 'next/link';

import NavbarPageLinkName from './NavbarPageLink.styles';

interface INavbarPageLink {
  href: string;
  children: React.ReactNode;
}

export default function NavbarPageLink({ href, children }: INavbarPageLink): JSX.Element {
  return (
    <Link href={href}>
      <NavbarPageLinkName>{children}</NavbarPageLinkName>
    </Link>
  );
}
