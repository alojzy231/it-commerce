import styled from 'styled-components';

import IconButton from '@generic/IconButton';

interface ISidebar {
  isOpened: boolean;
}

export const SidebarBackground = styled.button`
  width: 100%;
  height: 100%;

  display: ${({ isOpened }: ISidebar): string => (isOpened ? 'block' : 'none')};

  position: fixed;
  top: 0;
  left: 0;

  border: none;

  background-color: ${({ theme: { colors } }): string => colors.backgroundShade};
`;

export const SidebarContainer = styled.ul`
  width: 30rem;
  height: 100%;

  padding: 0.8rem;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  transform: translateX(${({ isOpened }: ISidebar): string => (isOpened ? '0' : '30rem')});

  transition: transform 0.2s linear;

  background-color: ${({ theme: { colors } }): string => colors.tints.primaryTint20};

  list-style-type: none;
`;

export const SidebarTopRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const SidebarCloseButton = styled(IconButton)`
  margin-right: auto;
`;
