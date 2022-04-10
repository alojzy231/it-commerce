import styled from 'styled-components';

const ShoppingCartButtonContainer = styled.li`
  position: relative;

  list-style-type: none;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    margin-right: 2.4rem;
  }
`;

export default ShoppingCartButtonContainer;
