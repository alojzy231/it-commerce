import styled from 'styled-components';

import { Header4, Header5 } from '@styles/typography';

const SelectInput = styled.select`
  margin-left: 1.6rem;
  padding: 0 2rem;

  ${Header4};

  border: 0.1rem solid ${({ theme: { colors } }): string => colors.secondary};
  border-radius: 2.4rem;

  outline: none;

  background-color: ${({ theme: { colors } }): string => colors.white};
  color: ${({ theme: { colors } }): string => colors.secondary};

  &:hover {
    outline: none;

    opacity: 0.8;

    cursor: pointer;
  }

  &:active {
    outline: none;
    opacity: 0.6;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    padding: 0 1rem;

    ${Header5};
  }
`;

export default SelectInput;
