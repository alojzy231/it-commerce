import styled from 'styled-components';

const AccountButtonContainer = styled.li`
  margin-right: 3.2rem;

  list-style-type: none;

  @media (max-width: ${({ theme: { medias } }): string => medias.tablet}) {
    margin-right: 2.4rem;
  }
`;

export default AccountButtonContainer;
