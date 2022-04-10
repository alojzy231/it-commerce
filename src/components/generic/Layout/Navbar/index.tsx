import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import PAGES_NAMES from '@consts/pagesNames';
import { IRootState } from '@redux/reducers';

import HamburgerMenu from './HamburgerMenu';
import ShoppingCartButton from './ShoppingCartButton';
import NavbarPageLink from './NavbarPageLink';
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarCompanyName,
  NavbarRightSection,
} from './Navbar.styles';

export default function Navbar(): JSX.Element {
  const isMobile: boolean = useSelector((state: IRootState) => state.isMobile);

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <Link href="/">
          <NavbarCompanyName>IT-Commerce</NavbarCompanyName>
        </Link>
        <NavbarRightSection>
          {isMobile ? (
            <HamburgerMenu />
          ) : (
            <>
              {PAGES_NAMES.map(({ name, url, subpages }) => (
                <NavbarPageLink href={url} subpages={subpages} key={name}>
                  {name}
                </NavbarPageLink>
              ))}
              <ShoppingCartButton />
            </>
          )}
        </NavbarRightSection>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
