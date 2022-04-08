import React from 'react';

import useRangeInput from '@hooks/useRangeInput';

import InputLabel from '../InputLabel.styles';

import {
  MinMaxRangeInputContainer,
  MinMaxRangeNumberInput,
  MinMaxRangeInputRangeContainer,
  MinMaxRangeInputRangeMinInput,
  MinMaxRangeInputRangeMaxInput,
  MinMaxRangeInputRangeProgressbar,
  MinMaxRangeInputRangeLabel,
  MinMaxRangeInputRangeLabelsContainer,
} from './MinMaxRangeInput.styles';

interface IMinMaxRangeInput {
  className?: string;
  name?: string;
  maxValue: number;
}

export default function MinMaxRangeInput({
  className,
  name,
  maxValue,
}: IMinMaxRangeInput): JSX.Element {
  const minValue = 1;

  const [rangeInput, handleMinValueChange, handleMaxValueChange] = useRangeInput(
    minValue,
    maxValue,
  );

  return (
    <MinMaxRangeInputContainer className={className}>
      <InputLabel>
        Min:
        <MinMaxRangeNumberInput
          value={rangeInput.currentValues.minValue}
          onChange={handleMinValueChange}
        />
        $
      </InputLabel>

      <InputLabel>
        Max:
        <MinMaxRangeNumberInput
          value={rangeInput.currentValues.maxValue}
          onChange={handleMaxValueChange}
        />
        $
      </InputLabel>
      <MinMaxRangeInputRangeContainer>
        <MinMaxRangeInputRangeProgressbar position={rangeInput.progressbarPosition} />
        <MinMaxRangeInputRangeMinInput
          name={`${name}Min`}
          value={rangeInput.progressbarThumbPosition.minPosition}
          max={maxValue}
          onChange={handleMinValueChange}
        />
        <MinMaxRangeInputRangeMaxInput
          name={`${name}Max`}
          value={rangeInput.progressbarThumbPosition.maxPosition}
          max={maxValue}
          onChange={handleMaxValueChange}
        />
      </MinMaxRangeInputRangeContainer>

      <MinMaxRangeInputRangeLabelsContainer>
        <MinMaxRangeInputRangeLabel>{minValue}$</MinMaxRangeInputRangeLabel>
        <MinMaxRangeInputRangeLabel>{maxValue}$</MinMaxRangeInputRangeLabel>
      </MinMaxRangeInputRangeLabelsContainer>
    </MinMaxRangeInputContainer>
  );
}

MinMaxRangeInput.defaultProps = {
  className: '',
  name: '',
};
