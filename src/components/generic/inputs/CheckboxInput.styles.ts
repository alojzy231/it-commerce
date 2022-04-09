import styled from 'styled-components';

const CheckboxInput = styled.input.attrs({
  type: 'checkbox',
})`
  height: 2.4rem;
  width: 2.4rem;

  margin: auto 0 auto 1.6rem;

  transform: translateY(5%);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    transform: translateY(15%);
  }
`;

export default CheckboxInput;
