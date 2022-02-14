import styled from 'styled-components';

const StyledIconButton = styled.button`
  height: fit-content;

  background-color: transparent;
  border: none;

  &:hover {
    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    opacity: 0.6;
  }
`;

export default StyledIconButton;
