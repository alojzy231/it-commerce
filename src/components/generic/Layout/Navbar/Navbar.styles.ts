import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 6.4rem;

  background-color: ${({ theme: { colors } }): string => colors.primary};

  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.25);
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { medias } }): string => medias.desktop};
  margin: 0 auto;
`;
