import styled from 'styled-components';

import { Header5 } from '@styles/typography';

const NavbarPageLinkName = styled.li`
  margin-right: 3.2rem;
  ${Header5};

  list-style-type: none;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export default NavbarPageLinkName;
