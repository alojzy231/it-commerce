import styled from 'styled-components';

import { Header5 } from '@styles/typography';

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

export const NavbarPageLinkContainer = styled.li`
  height: max-content;

  margin-right: 2.6rem;
  padding: 0.7rem 0;

  position: relative;

  list-style-type: none;

  &:hover ${NavbarPageLinkName} {
    color: ${({ theme: { colors } }): string => colors.white};
    background-color: ${({ theme: { colors } }): string => colors.selected};

    border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

    cursor: pointer;
  }

  ${NavbarPageLinkSubmenu} {
    max-height: 0;
    visibility: hidden;
  }

  &:hover ${NavbarPageLinkSubmenu} {
    max-height: 60rem;
    visibility: visible;
  }
`;
