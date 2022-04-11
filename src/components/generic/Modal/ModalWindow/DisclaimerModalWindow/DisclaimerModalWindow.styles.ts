import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';
import GenericButton from '@generic/buttons/GenericButton';

export const DisclaimerModalWindowTitle = styled.h4`
  margin-bottom: 3.2rem;

  font-weight: bold;

  text-align: center;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    margin-bottom: 1.6rem;

    ${Header5};
    font-weight: bold;
  }
`;

export const DisclaimerModalWindowText = styled.h5`
  margin-bottom: 3.2rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header6};
    margin-bottom: 1.6rem;
  }
`;

export const DisclaimerModalWindowButton = styled(GenericButton)`
  margin-left: auto;
`;
