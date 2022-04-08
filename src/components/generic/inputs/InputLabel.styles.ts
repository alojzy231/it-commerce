import styled from 'styled-components';

import { Header4, Header5 } from '@styles/typography';

const InputLabel = styled.label`
  width: fit-content;
  ${Header4};
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export default InputLabel;
