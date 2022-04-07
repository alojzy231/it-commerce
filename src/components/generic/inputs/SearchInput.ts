import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';

const SearchInput = styled.input.attrs({
  type: 'text',
})`
  width: 28.4rem;

  padding: 0.6rem 1.2rem 0.6rem 4.4rem;

  border: 0.4rem solid ${({ theme: { colors } }): string => colors.secondary};
  border-radius: 2.8rem;

  outline: none;

  ${Header5};

  color: ${({ theme: { colors } }): string => colors.secondary};
  background-color: transparent;

  background-image: url('./icons/searchIcon.svg');
  background-repeat: no-repeat;
  background-position: 1.2rem;

  &:hover {
    filter: brightness(1.2);

    cursor: text;
  }

  &:active {
    filter: brightness(1.4);
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 20rem;

    padding: 0.6rem 1.2rem 0.6rem 4.4rem;

    ${Header6};
  }
`;

export default SearchInput;
