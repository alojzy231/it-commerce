import React from 'react';
import { useRouter } from 'next/router';

import {
  ESortByOptions,
  EProductsCollections,
  EProductsSizes,
  SORT_BY_OPTIONS,
  PRODUCTS_COLLECTIONS,
  PRODUCTS_SIZES,
  PRODUCT_MIN_PRICE,
  PRODUCT_MAX_PRICE,
} from '@consts/products';
import SelectInput from '@generic/inputs/SelectInput.styles';
import { TMinMaxRangeInputValues } from '@generic/inputs/MinMaxRangeInput';
import CheckboxInput from '@generic/inputs/CheckboxInput.styles';
import useFilterOptions from '@hooks/useFilterOptions';

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

export default function FilterByModalWindow({
  handleCloseModal,
}: IFilterByModalWindow): JSX.Element {
  const router = useRouter();

  const [filterOptions, setFilterOptions] = useFilterOptions();

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

    setFilterOptions((prevState) => ({ ...prevState, [name]: finaValue }));
  };

  const handleChangeRangeInput = (getValues: TMinMaxRangeInputValues): void => {
    setFilterOptions((prevState) => ({
      ...prevState,
      priceMin: getValues.minValue,
      priceMax: getValues.maxValue,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const query: {
      [key: string]: string | number;
    } = {};

    Object.entries(filterOptions).forEach(([key, value]) => {
      if (typeof key !== undefined) {
        query[key] = value;
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
            defaultValue={filterOptions.sortBy}
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
            defaultValue={filterOptions.collection}
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
            defaultValue={filterOptions.size}
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
          minValue={PRODUCT_MIN_PRICE}
          maxValue={PRODUCT_MAX_PRICE}
          defaultMinValue={filterOptions.priceMin || 0}
          defaultMaxValue={filterOptions.priceMax || PRODUCT_MAX_PRICE}
          getValues={handleChangeRangeInput}
        />

        <FilterByModalWindowLabel>
          Is on sale
          <CheckboxInput
            checked={filterOptions.onSale}
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
