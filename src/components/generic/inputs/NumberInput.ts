import styled from 'styled-components';

import { Header4, Header5 } from '@styles/typography';

export const NumberInput = styled.input.attrs({
  type: 'number',
})`
  padding: 0 2rem;

  ${Header4};

  color: ${({ theme: { colors } }): string => colors.secondary};

  border: 0.1rem solid ${({ theme: { colors } }): string => colors.secondary};
  border-radius: 2.4rem;

  &:hover {
    outline: none;

    filter: brightness(1.1);

    cursor: pointer;
  }

  &:active {
    outline: none;
    filter: brightness(1.3);

    cursor: pointer;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export default NumberInput;
