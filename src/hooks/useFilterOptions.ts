import { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';

import { IFilterQueryOptions, IFilterTranslatedOptions } from '@customTypes/filterOptions';

type TUSeFilterOptionsReturn = [
  IFilterTranslatedOptions,
  Dispatch<SetStateAction<IFilterTranslatedOptions>>,
];

const useFilterOptions = (): TUSeFilterOptionsReturn => {
  const { query } = useRouter();
  const { sortBy, search, collection, size, priceMin, priceMax, onSale }: IFilterQueryOptions =
    query;

  const defaultFilterOptions: IFilterTranslatedOptions = {
    sortBy,
    search,
    collection,
    size,
    priceMin: Number(priceMin),
    priceMax: Number(priceMax),
    onSale: onSale === 'true',
  };
  // console.log(defaultFilterOptions);

  const [filterOptions, setFilterOptions] =
    useState<IFilterTranslatedOptions>(defaultFilterOptions);

  return [filterOptions, setFilterOptions];
};

export default useFilterOptions;
