import React from 'react';

import { PRODUCTS_COLLECTIONS, PRODUCTS_SIZES } from '@consts/products';
import SelectInput from '@generic/inputs/SelectInput.styles';

import GenericModalWindow from '../GenericModalWindow';

import {
  FilterByModalWindowForm,
  FilterByModalWindowLabel,
  FilterByModalWindowButton,
  FilterByModalWindowMinMaxRangeInput,
} from './FilterByModalWindow.styles';

const FILTER_OPTIONS: string[] = [
  'newest',
  'oldest',
  'on sale',
  'price by lowest',
  'price by highest',
];

interface IFilterByModalWindow {
  handleCloseModal: () => void;
}

export default function FilterByModalWindow({
  handleCloseModal,
}: IFilterByModalWindow): JSX.Element {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    handleCloseModal();
  };

  return (
    <GenericModalWindow title="Filter by">
      <FilterByModalWindowForm onSubmit={handleSubmit}>
        <FilterByModalWindowLabel rowspan>
          Filter by:
          <SelectInput>
            {FILTER_OPTIONS.map(
              (productCollection: string): JSX.Element => (
                <option key={productCollection} value={productCollection}>
                  {productCollection}
                </option>
              ),
            )}
          </SelectInput>
        </FilterByModalWindowLabel>

        <FilterByModalWindowLabel>
          Collection:
          <SelectInput>
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
          <SelectInput>
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

        <FilterByModalWindowMinMaxRangeInput name="price" maxValue={100} />

        <FilterByModalWindowButton>Filter</FilterByModalWindowButton>
      </FilterByModalWindowForm>
    </GenericModalWindow>
  );
}
