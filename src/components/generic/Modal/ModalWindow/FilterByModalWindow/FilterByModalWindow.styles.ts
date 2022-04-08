import styled from 'styled-components';

import InputLabel from '@generic/inputs/InputLabel.styles';
import GenericButton from '@generic/buttons/GenericButton';
import MinMaxRangeInput from '@generic/inputs/MinMaxRangeInput';

interface IFilterByModalWindowLabel {
  rowspan?: boolean;
}

export const FilterByModalWindowForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 4rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    grid-template-columns: auto;
    grid-row-gap: 2rem;
  }
`;
export const FilterByModalWindowLabel = styled(InputLabel)<IFilterByModalWindowLabel>`
  ${({ rowspan }): string => (rowspan ? 'grid-column: 1/-1;' : '')};
`;

export const FilterByModalWindowMinMaxRangeInput = styled(MinMaxRangeInput)`
  grid-column: 1 / -1;
`;

export const FilterByModalWindowButton = styled(GenericButton)`
  width: fit-content;

  margin-left: auto;

  grid-column: 2;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    width: 100%;

    margin-left: 0;

    grid-column: 1 / -1;
  }
`;
