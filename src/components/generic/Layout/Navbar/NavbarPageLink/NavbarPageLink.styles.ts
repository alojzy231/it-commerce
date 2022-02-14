import styled from 'styled-components';

import { Header5 } from '@styles/typography';
import IconButton from '@generic/IconButton';

import Submenu from '../Submenu';

export const NavbarPageLinkSubmenu = styled(Submenu)``;

export const NavbarPageLinkName = styled.a`
  padding: 0.6rem;

  ${Header5};

  border: 0.1rem solid transparent;

  text-decoration: none;
  color: ${({ theme: { colors } }): string => colors.black};

  &:active {
    opacity: 0.6;
  }
`;

interface INavbarPageLinkWrapper {
  isSidebar?: boolean;
}

export const NavbarPageLinkWrapper = styled.li`
  height: max-content;
  width: fit-content;

  ${({ isSidebar }: INavbarPageLinkWrapper): string =>
    isSidebar ? 'margin-bottom: 1.2rem' : 'margin-right: 2.6rem'};

  padding: 0.7rem 0;

  position: relative;

  list-style-type: none;

  ${NavbarPageLinkSubmenu} {
    max-height: 0;

    padding: 0 1.6rem;
    border-width: 0;

    visibility: hidden;
    position: ${({ isSidebar }: INavbarPageLinkWrapper): string =>
      isSidebar ? 'relative' : 'absolute'};
    top: 100%;

    transition: all 0.2s linear;
  }

  &:hover ${NavbarPageLinkSubmenu} {
    max-height: 100rem;

    padding: 0.8rem 1.6rem;
    border-width: 0.1rem;

    visibility: visible;
  }
`;

export const NavbarPageLinkChaviconButton = styled(IconButton)`
  margin: 0.6rem 0.6rem 0.6rem 1.2rem;
  & path {
    fill: ${({ theme: { colors } }): string => colors.black};
  }
`;

export const NavbarPageLinkContainer = styled.div`
  display: flex;

  align-items: center;

  &:hover {
    background-color: ${({ theme: { colors } }): string => colors.selected};

    border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

    cursor: pointer;

    & ${NavbarPageLinkName} {
      color: ${({ theme: { colors } }): string => colors.white};
    }

    & ${NavbarPageLinkChaviconButton} {
      & path {
        fill: ${({ theme: { colors } }): string => colors.white};
      }
    }
  }
`;
