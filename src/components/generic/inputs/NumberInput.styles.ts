import styled from 'styled-components';

import { Header4, Header5 } from '@styles/typography';

export const NumberInput = styled.input.attrs({
  type: 'number',
})`
  margin-left: 1.6rem;

  padding: 0 2rem;

  ${Header4};

  color: ${({ theme: { colors } }): string => colors.secondary};

  border: 0.1rem solid ${({ theme: { colors } }): string => colors.secondary};
  border-radius: 2.4rem;

  outline: none;

  &:hover {
    outline: none;

    opacity: 0.8;

    cursor: text;
  }

  &:active {
    outline: none;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export default NumberInput;
