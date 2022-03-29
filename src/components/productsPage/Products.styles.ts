import styled from 'styled-components';

import HighlightedTitle from '@generic/HighlightedTitle';
import { Header2, Header5 } from '@styles/typography';

export const ProductsPageHighlightedTitle = styled(HighlightedTitle)`
  margin: 6.4rem auto;

  display: block;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin: 5rem auto;
  }
`;
export const ProductsPageTitleText = styled.h1`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header2};
    font-weight: bold;
  }
`;
export const ProductsPageProductsContainer = styled.div`
  margin-bottom: 12.8rem;
  padding: 0 6.4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* overflow: hidden; */

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    padding: 0 3.2rem;

    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 6.4rem;
    padding: 0 1.2rem;

    grid-template-columns: 1fr;
  }
`;

export const ProductsPageProductWrapper = styled.a`
  margin: 5%;
  padding: 1rem;

  display: flex;
  flex-direction: column;

  outline: none;
  border: none;

  box-shadow: 6px 6px 4px rgba(0, 0, 0, 0.25);
  color: ${({ theme: { colors } }): string => colors.black};
  text-decoration: none;

  cursor: pointer;

  transition: 50ms ease;

  &:hover {
    box-shadow: 12px 12px 4px rgba(0, 0, 0, 0.25);
  }

  &:active {
    outline: 0.1rem solid ${({ theme: { colors } }): string => colors.secondary};
  }
`;
export const ProductsPageProductName = styled.h4`
  margin: auto;

  font-weight: bold;
  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
    font-weight: bold;
  }
`;
