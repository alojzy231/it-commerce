import styled from 'styled-components';

import FilterByButton from '@generic/buttons/FIlterByButton';

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

  margin: 6.4rem 0 0 auto;

  display: flex;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin: 3.2rem auto calc(3.2rem - 5%);
  }
`;

export const ProductsPageFilterByButton = styled(FilterByButton)`
  margin: auto 0 auto 4.2rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-left: 1.8rem;
  }
`;

export const ProductsPageProductsNotFound = styled.h3`
  margin-top: 2rem;

  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-left: 1.8rem;
  }
`;
