import React, { useState } from 'react';
import { useRouter } from 'next/router';

import {
  ESortByOptions,
  EProductsCollections,
  EProductsSizes,
  SORT_BY_OPTIONS,
  PRODUCTS_COLLECTIONS,
  PRODUCTS_SIZES,
} from '@consts/products';
import SelectInput from '@generic/inputs/SelectInput.styles';
import { TMinMaxRangeInputValues } from '@generic/inputs/MinMaxRangeInput';
import CheckboxInput from '@generic/inputs/CheckboxInput.styles';

import GenericModalWindow from '../GenericModalWindow';

import {
  FilterByModalWindowForm,
  FilterByModalWindowLabel,
  FilterByModalWindowButton,
  FilterByModalWindowMinMaxRangeInput,
} from './FilterByModalWindow.styles';

interface IFilterByModalWindow {
  handleCloseModal: () => void;
}

interface IFormValues {
  sortBy: ESortByOptions;
  collection: EProductsCollections | string;
  size: EProductsSizes | string;
  priceRange: {
    minValue: number;
    maxValue: number;
  };
  onSale: boolean;
}

const RANGE_INPUT_MIN_VALUE = 0;
const RANGE_INPUT_MAX_VALUE = 100;

export default function FilterByModalWindow({
  handleCloseModal,
}: IFilterByModalWindow): JSX.Element {
  const router = useRouter();

  const [formValues, setFormValues] = useState<IFormValues>({
    sortBy: ESortByOptions.newest,
    collection: '',
    size: '',
    priceRange: {
      minValue: RANGE_INPUT_MIN_VALUE,
      maxValue: RANGE_INPUT_MAX_VALUE,
    },
    onSale: false,
  });

  const handleInputChange = (
    { target }: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>,
    name: string,
  ): void => {
    let newValue = target.value;

    if (name === 'filterBy') {
      newValue = ESortByOptions[newValue];
    } else if (name === 'collection') {
      newValue = EProductsCollections[newValue];
    } else if (name === 'size') {
      newValue = EProductsSizes[newValue];
    }

    const finaValue = name === 'onSale' ? (target as HTMLInputElement).checked : newValue;

    setFormValues((prevState) => ({ ...prevState, [name]: finaValue }));
  };

  const handleChangeRangeInput = (getValues: TMinMaxRangeInputValues): void =>
    setFormValues((prevState) => ({ ...prevState, priceRange: { ...getValues } }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const query: {
      [key: string]: string | number;
    } = {};

    Object.entries(formValues).forEach(([key, value]) => {
      if (value !== '') {
        if (key === 'priceRange') {
          query.priceMin = value.minValue;
          query.priceMax = value.maxValue;
        } else {
          query[key] = value;
        }
      }
    });

    router.push({ query }, undefined, { shallow: true });

    handleCloseModal();
  };

  return (
    <GenericModalWindow title="Filter by">
      <FilterByModalWindowForm onSubmit={handleSubmit}>
        <FilterByModalWindowLabel rowspan>
          Sort by:
          <SelectInput
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              handleInputChange(event, 'sortBy')
            }
          >
            {SORT_BY_OPTIONS.map(
              (sortByOption: string): JSX.Element => (
                <option key={sortByOption} value={ESortByOptions[sortByOption]}>
                  {sortByOption}
                </option>
              ),
            )}
          </SelectInput>
        </FilterByModalWindowLabel>

        <FilterByModalWindowLabel>
          Collection:
          <SelectInput
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              handleInputChange(event, 'collection')
            }
          >
            <option value="*">*</option>

            {PRODUCTS_COLLECTIONS.map(
              (productCollection: string): JSX.Element => (
                <option key={productCollection} value={productCollection}>
                  {productCollection}
                </option>
              ),
            )}
          </SelectInput>
        </FilterByModalWindowLabel>

        <FilterByModalWindowLabel>
          Size:
          <SelectInput
            onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
              handleInputChange(event, 'size')
            }
          >
            <option value="*">*</option>

            {PRODUCTS_SIZES.map(
              (productCollection: string): JSX.Element => (
                <option key={productCollection} value={productCollection}>
                  {productCollection}
                </option>
              ),
            )}
          </SelectInput>
        </FilterByModalWindowLabel>

        <FilterByModalWindowMinMaxRangeInput
          name="price"
          minValue={RANGE_INPUT_MIN_VALUE}
          maxValue={RANGE_INPUT_MAX_VALUE}
          getValues={handleChangeRangeInput}
        />

        <FilterByModalWindowLabel>
          Is on sale
          <CheckboxInput
            onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
              handleInputChange(event, 'onSale')
            }
          />
        </FilterByModalWindowLabel>
        <FilterByModalWindowButton>Filter</FilterByModalWindowButton>
      </FilterByModalWindowForm>
    </GenericModalWindow>
  );
}
