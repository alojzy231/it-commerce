import styled from 'styled-components';

import { ParagraphBig } from '@styles/typography';

const ShoppingCartButtonNumberOfItems = styled.div`
  width: 2.3rem;
  aspect-ratio: 1 / 1;

  ${ParagraphBig};

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  right: 0;
  transform-origin: top left;
  transform: translate(25%, 25%);

  border-radius: 50%;
  border: 0.1rem dashed ${({ theme: { colors } }): string => colors.black};

  color: ${({ theme: { colors } }): string => colors.black};
  background-color: ${({ theme: { colors } }): string => colors.primary};
`;

export default ShoppingCartButtonNumberOfItems;
