import React, { useEffect } from 'react';

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
  MinMaxRangeInputDontWrap,
} from './MinMaxRangeInput.styles';

export type TMinMaxRangeInputValues = {
  minValue: number;
  maxValue: number;
};

interface IMinMaxRangeInput {
  className?: string;
  name?: string;
  minValue: number;
  maxValue: number;
  defaultMinValue: number;
  defaultMaxValue: number;
  getValues: (minMaxRangeInputValues: TMinMaxRangeInputValues) => void;
}

export default function MinMaxRangeInput({
  className,
  name,
  minValue,
  maxValue,
  defaultMinValue,
  defaultMaxValue,
  getValues,
}: IMinMaxRangeInput): JSX.Element {
  const [rangeInput, handleMinValueChange, handleMaxValueChange] = useRangeInput(
    minValue,
    maxValue,
    defaultMinValue,
    defaultMaxValue,
  );

  useEffect((): void => {
    const minMaxRangeInputValues: TMinMaxRangeInputValues = {
      minValue: rangeInput.progressbarThumbPosition.minPosition,
      maxValue: rangeInput.progressbarThumbPosition.maxPosition,
    };
    getValues(minMaxRangeInputValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rangeInput]);

  return (
    <MinMaxRangeInputContainer className={className}>
      <InputLabel>
        Min:
        <MinMaxRangeInputDontWrap>
          <MinMaxRangeNumberInput
            step={0.01}
            value={rangeInput.currentValues.minValue}
            onChange={handleMinValueChange}
          />
          $
        </MinMaxRangeInputDontWrap>
      </InputLabel>

      <InputLabel>
        Max:
        <MinMaxRangeInputDontWrap>
          <MinMaxRangeNumberInput
            step={0.01}
            value={rangeInput.currentValues.maxValue}
            onChange={handleMaxValueChange}
          />
          $
        </MinMaxRangeInputDontWrap>
      </InputLabel>
      <MinMaxRangeInputRangeContainer>
        <MinMaxRangeInputRangeProgressbar position={rangeInput.progressbarPosition} />
        <MinMaxRangeInputRangeMinInput
          name={`${name}Min`}
          value={rangeInput.progressbarThumbPosition.minPosition}
          min={minValue}
          max={maxValue}
          onChange={handleMinValueChange}
        />
        <MinMaxRangeInputRangeMaxInput
          name={`${name}Max`}
          value={rangeInput.progressbarThumbPosition.maxPosition}
          min={minValue}
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
