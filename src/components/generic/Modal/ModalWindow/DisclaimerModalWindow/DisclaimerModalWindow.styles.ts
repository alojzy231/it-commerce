import styled from 'styled-components';

import { Header5, Header6 } from '@styles/typography';
import GenericButton from '@generic/buttons/GenericButton';

export const DisclaimerModalWindowTitle = styled.h4`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
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

export default DisclaimerModalWindowTitle;
