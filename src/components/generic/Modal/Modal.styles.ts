import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  padding: 2rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  overflow-x: hidden;
  overflow-y: scroll;
`;
export const ModalBackground = styled.button`
  width: calc(100vw - 0.9%);
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;

  outline: none;
  border: none;

  background-color: ${({ theme: { colors } }): string => colors.black};
  opacity: 0.6;

  &:hover {
    cursor: pointer;
  }
`;
