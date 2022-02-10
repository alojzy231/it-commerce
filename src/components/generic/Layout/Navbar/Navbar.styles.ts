import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 6.4rem;

  position: sticky;
  top: 0;

  background-color: ${({ theme: { colors } }): string => colors.primary};

  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.25);
`;

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { medias } }): string => medias.desktop};

  margin: 0 auto;
  padding: 0 3.2rem 0 6.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarCompanyName = styled.h4`
  font-weight: bold;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const NavbarRightSection = styled.ul`
  display: flex;
`;
