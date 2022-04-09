import styled, { css } from 'styled-components';

import { Header5 } from '@styles/typography';

import NumberInput from '../NumberInput.styles';

export interface IInputProgress {
  position: {
    left: number;
    right: number;
  };
}

export const MinMaxRangeInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 2rem;

  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    grid-template-columns: auto;
  }
`;

export const MinMaxRangeNumberInput = styled(NumberInput)`
  width: 17rem;
`;

export const MinMaxRangeInputRangeContainer = styled.div`
  width: 100%;
  height: 1rem;

  grid-column: 1 / -1;

  position: relative;

  border: 0.1rem solid ${({ theme: { colors } }): string => colors.black};
  border-radius: 0.5rem;

  background-color: ${({ theme: { colors } }): string => colors.white};
`;

export const MinMaxRangeInputRangeProgressbar = styled.div<IInputProgress>`
  height: 0.8rem;

  position: absolute;
  ${({ position: { left, right } }): string => `left: ${left || 0}%; right: ${right || 0}%;`};

  border-radius: 0.5rem;

  background-color: ${({ theme: { colors } }): string => colors.secondary};
`;

const inputRangeDefaultStyle = css`
  appearance: none;

  width: 100%;

  position: absolute;
  top: 0;
  z-index: 0;

  pointer-events: none;

  transform: translateY(-25%);

  background-color: transparent;

  border: none;

  &::-webkit-slider-thumb {
    appearance: none;

    height: 2rem;
    width: 2rem;

    z-index: 20;

    pointer-events: auto;

    border-radius: 50%;

    background-color: ${({ theme: { colors } }): string => colors.selected};

    &:hover {
      filter: brightness(1.2);

      cursor: pointer;
    }

    &:active {
      filter: brightness(1.4);

      cursor: pointer;
    }
  }
`;

export const MinMaxRangeInputRangeMinInput = styled.input.attrs({
  type: 'range',
})`
  ${inputRangeDefaultStyle};

  left: 0;
`;
export const MinMaxRangeInputRangeMaxInput = styled.input.attrs({
  type: 'range',
})`
  ${inputRangeDefaultStyle};

  right: 0;
`;

export const MinMaxRangeInputRangeLabelsContainer = styled.div`
  grid-column: 1 / -1;

  display: flex;

  justify-content: space-between;
`;

export const MinMaxRangeInputRangeLabel = styled.h4`
  @media (max-width: ${({ theme: { medias } }): string => medias.mobile}) {
    ${Header5};
  }
`;

export const MinMaxRangeInputDontWrap = styled.span`
  white-space: nowrap;
`;
