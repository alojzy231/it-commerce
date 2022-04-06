import styled from 'styled-components';

import ChevronLeftIcon from '@icons/ChevronLeftIcon';

import IconButton from '../IconButton';

export const GoBackButtonContainer = styled(IconButton)`
  margin: 2rem 2rem 0 2rem;
`;
export const GoBackIcon = styled(ChevronLeftIcon)`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
