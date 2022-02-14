import styled from 'styled-components';

import { Header6 } from '@styles/typography';

export const SubmenuContainer = styled.ul`
  width: 100%;
  min-width: max-content;

  overflow-y: hidden;

  background-color: ${({ theme: { colors } }): string => colors.background};

  border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
`;
export const SubmenuOption = styled.li`
  padding: 0.8rem;

  ${Header6};

  border: 0.1rem solid transparent;

  list-style-type: none;

  text-decoration: none;
  color: ${({ theme: { colors } }): string => colors.black};

  &:hover {
    color: ${({ theme: { colors } }): string => colors.white};
    background-color: ${({ theme: { colors } }): string => colors.selected};

    border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;
