import styled from 'styled-components';

import FilterByIcon from '@icons/FilterByIcon';

const FilterByButtonIcon = styled(FilterByIcon)`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 3.6rem;
    height: 3.6rem;
  }
`;

export default FilterByButtonIcon;
