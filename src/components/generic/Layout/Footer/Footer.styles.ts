import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 12.8rem;

  background-color: ${({ theme: { colors } }): string => colors.primary};

  box-shadow: inset 0px 2px 0px rgba(0, 0, 0, 0.25);
`;
export const FooterContainer = styled.footer`
  width: 100%;
  height: 100%;
  max-width: ${({ theme: { medias } }): string => medias.desktop};
  margin: 0 auto;
`;
