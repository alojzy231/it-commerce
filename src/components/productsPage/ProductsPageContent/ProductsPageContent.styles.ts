import styled from 'styled-components';

import FilterByButton from '@generic/buttons/FIlterByButton';
import { Header5, Header6 } from '@styles/typography';

export const ProductsPageContentContainer = styled.div`
  padding: 0 6.4rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    padding: 0 3.2rem;
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    padding: 0 1.2rem;
  }
`;

export const ProductsPageSearchInputsContainer = styled.div`
  width: fit-content;

  margin: 6.4rem 0 calc(6.4rem - 5%) auto;

  display: flex;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin: 3.2rem auto calc(3.2rem - 5%);
  }
`;

export const ProductsPageSearchInput = styled.input.attrs({
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

  &::placeholder {
    color: ${({ theme: { colors } }): string => colors.secondary};

    opacity: 0.8;
  }

  &:hover {
    opacity: 0.8;

    cursor: text;
  }

  &:active {
    opacity: 0.6;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 20rem;

    padding: 0.6rem 1.2rem 0.6rem 4.4rem;

    ${Header6};
  }
`;

export const ProductsPageFilterByButton = styled(FilterByButton)`
  margin: auto 0 auto 4.2rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-left: 1.8rem;
  }
`;
