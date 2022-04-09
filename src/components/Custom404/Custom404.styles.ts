import styled from 'styled-components';

import GenericButton from '@generic/buttons/GenericButton';
import { Header5 } from '@styles/typography';

export const Custom404Container = styled.div`
  padding: 6.4rem 1rem;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: repeat(4, auto);
  justify-content: center;
`;

export const Custom404Title = styled.h1`
  margin: 0 auto 10rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 5rem;
  }
`;
export const Custom404Subtitle = styled.h4`
  margin: 0 auto;

  text-align: center;

  &::after {
    content: '';

    width: 0;
    height: 10rem;

    margin: 2rem auto;

    display: block;

    border-left: 0.2rem dashed black;
  }

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export const Custom404GoToHomepageButton = styled(GenericButton)`
  width: fit-content;

  margin: 0 auto;

  grid-row: -1;
`;
