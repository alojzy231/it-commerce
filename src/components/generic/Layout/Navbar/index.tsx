import React from 'react';
import Link from 'next/link';

import PAGES_NAMES from '@consts/pagesNames';

import NavbarPageLink from './NavbarPageLink';
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarCompanyName,
  NavbarRightSection,
} from './Navbar.styles';

export default function Navbar(): JSX.Element {
  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Link href="/">
          <NavbarCompanyName>IT-Commerce</NavbarCompanyName>
        </Link>
        <NavbarRightSection>
          {PAGES_NAMES.map(({ name, url }) => (
            <NavbarPageLink href={url}>{name}</NavbarPageLink>
          ))}
        </NavbarRightSection>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
