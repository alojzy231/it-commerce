import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: ${({ theme: { colors } }): string => colors.background};
  position: relative;
`;
export const LayoutMain = styled.main`
  width: 100%;
  max-width: ${({ theme: { medias } }): string => medias.desktop};
  min-height: 100vh;
  margin: 0 auto;
`;
