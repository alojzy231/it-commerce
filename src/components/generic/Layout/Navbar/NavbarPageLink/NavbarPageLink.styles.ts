import styled from 'styled-components';

import { Header5 } from '@styles/typography';
import ChevronDownIcon from '@icons/ChevronDownIcon';

import Submenu from '../Submenu';

export const NavbarPageLinkSubmenu = styled(Submenu)``;

export const NavbarPageLinkChaviconIcon = styled(ChevronDownIcon)`
  margin: 0.6rem 0.6rem 0.6rem 1.2rem;
  path {
    fill: ${({ theme: { colors } }): string => colors.black};
  }
`;

export const NavbarPageLinkName = styled.a`
  padding: 0.6rem;

  ${Header5};

  text-decoration: none;
  color: ${({ theme: { colors } }): string => colors.black};

  user-select: none;

  &:active {
    opacity: 0.6;
  }
`;

export const NavbarPageLinkContainer = styled.div`
  display: flex;
  align-items: center;

  border: 0.1rem solid transparent;
`;

interface INavbarPageLinkWrapper {
  isSidebar?: boolean;
}

export const NavbarPageLinkWrapper = styled.li`
  height: max-content;
  width: fit-content;

  ${({ isSidebar }: INavbarPageLinkWrapper): string =>
    isSidebar ? 'margin-bottom: 1.2rem' : 'margin-right: 2.6rem'};

  position: relative;

  list-style-type: none;

  ${NavbarPageLinkSubmenu} {
    max-height: 0;

    padding: 0 1.6rem;
    border-width: 0;

    visibility: hidden;
    position: ${({ isSidebar }: INavbarPageLinkWrapper): string =>
      isSidebar ? 'relative' : 'absolute'};
    top: 0;

    transition: all 0.2s linear;
  }

  &:hover ${NavbarPageLinkContainer} {
    background-color: ${({ theme: { colors } }): string => colors.selected};

    border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

    cursor: pointer;

    ${NavbarPageLinkName} {
      color: ${({ theme: { colors } }): string => colors.white};
    }

    ${NavbarPageLinkChaviconIcon} {
      path {
        fill: ${({ theme: { colors } }): string => colors.white};
      }
    }
  }

  &:hover ${NavbarPageLinkSubmenu} {
    max-height: 100rem;

    padding: 0.8rem 1.6rem;
    border-width: 0.1rem;

    visibility: visible;
  }
`;
