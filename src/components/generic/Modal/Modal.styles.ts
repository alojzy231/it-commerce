import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  padding: 2rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: ${({ theme: { colors } }): string => colors.black}99;

  overflow-y: auto;
`;

export default ModalWrapper;
