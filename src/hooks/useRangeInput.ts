import { useState } from 'react';

interface IRangeInput {
  currentValues: {
    minValue: number | '';
    maxValue: number | '';
  };
  progressbarPosition: {
    left: number;
    right: number;
  };
  progressbarThumbPosition: {
    minPosition: number;
    maxPosition: number;
  };
}

type TUseRangeInputReturnType = [
  IRangeInput,
  ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
  ({ target }: React.ChangeEvent<HTMLInputElement>) => void,
];

const useRangeInput = (
  minValue: number,
  maxValue: number,
  defaultMinValue: number,
  defaultMaxValue: number,
): TUseRangeInputReturnType => {
  const [rangeInput, setRangeInput] = useState<IRangeInput>({
    currentValues: {
      minValue: defaultMinValue || minValue,
      maxValue: defaultMaxValue || maxValue,
    },
    progressbarPosition: {
      left: (defaultMinValue / maxValue) * 100,
      right: 100 - (defaultMaxValue / maxValue) * 100,
    },
    progressbarThumbPosition: {
      minPosition: defaultMinValue,
      maxPosition: defaultMaxValue,
    },
  });

  const handleMinValueInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseFloat(target.value);

    if (!newValue) {
      setRangeInput(
        (prevState: IRangeInput): IRangeInput => ({
          ...prevState,
          currentValues: { ...prevState.currentValues, minValue: '' },
          progressbarPosition: {
            ...prevState.progressbarPosition,
            left: 0,
          },
          progressbarThumbPosition: {
            ...prevState.progressbarThumbPosition,
            minPosition: 0,
          },
        }),
      );
    } else if (newValue >= minValue && newValue <= maxValue) {
      setRangeInput(
        (prevState: IRangeInput): IRangeInput => ({
          ...prevState,
          currentValues: { ...prevState.currentValues, minValue: newValue },
        }),
      );

      if (newValue < rangeInput.currentValues.maxValue) {
        const newProgressbarLeftPosition = (newValue / maxValue) * 100;

        setRangeInput(
          (prevState: IRangeInput): IRangeInput => ({
            ...prevState,
            progressbarPosition: {
              ...prevState.progressbarPosition,
              left: newProgressbarLeftPosition,
            },
            progressbarThumbPosition: {
              ...prevState.progressbarThumbPosition,
              minPosition: newValue,
            },
          }),
        );
      }
    }
  };

  const handleMaxValueInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = parseFloat(target.value);

    if (!newValue) {
      setRangeInput(
        (prevState: IRangeInput): IRangeInput => ({
          ...prevState,
          currentValues: { ...prevState.currentValues, maxValue: '' },
          progressbarPosition: {
            ...prevState.progressbarPosition,
            right: 0,
          },
          progressbarThumbPosition: {
            ...prevState.progressbarThumbPosition,
            maxPosition: maxValue,
          },
        }),
      );
    } else if (newValue >= minValue && newValue <= maxValue) {
      setRangeInput(
        (prevState: IRangeInput): IRangeInput => ({
          ...prevState,
          currentValues: { ...prevState.currentValues, maxValue: newValue },
        }),
      );

      if (newValue > rangeInput.currentValues.minValue) {
        const newProgressbarRightPosition = 100 - (newValue / maxValue) * 100;

        setRangeInput(
          (prevState: IRangeInput): IRangeInput => ({
            ...prevState,
            progressbarPosition: {
              ...prevState.progressbarPosition,
              right: newProgressbarRightPosition,
            },
            progressbarThumbPosition: {
              ...prevState.progressbarThumbPosition,
              maxPosition: newValue,
            },
          }),
        );
      }
    }
  };

  return [rangeInput, handleMinValueInputChange, handleMaxValueInputChange];
};

export default useRangeInput;
