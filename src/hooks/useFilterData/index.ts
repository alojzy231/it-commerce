import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { TProduct } from '@customTypes/product';
import { IFilterQueryOptions } from '@customTypes/filterOptions';
import { EProductsCollections } from '@consts/products';

import {
  filterByCollection,
  filterByIsOnSale,
  filterByPrice,
  filterBySearch,
  filterBySize,
} from './productsFilter';
import productsSortBy from './productsSortBy';

const useFilterData = (productsData: TProduct[]): TProduct[] => {
  const { query } = useRouter();

  const [products, setProducts] = useState<TProduct[]>(productsData);

  useEffect((): void => {
    const { sortBy, search, collection, size, priceMin, priceMax, onSale }: IFilterQueryOptions =
      query;

    let filterProducts = [...productsData];
    setProducts(filterProducts);

    if (priceMin && priceMax) {
      filterProducts = filterByPrice(filterProducts, Number(priceMin), Number(priceMax));
    }

    if (collection) {
      filterProducts = filterByCollection(filterProducts, EProductsCollections[collection]);
    }

    if (search) {
      filterProducts = filterBySearch(filterProducts, search);
    } else {
      delete query.search;

      setProducts(filterProducts);
    }

    if (size) {
      filterProducts = filterBySize(filterProducts, size);
    }

    if (onSale === 'true') {
      filterProducts = filterByIsOnSale(filterProducts);
    }

    if (sortBy) {
      filterProducts = productsSortBy(filterProducts, sortBy);
    }

    setProducts(filterProducts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return products;
};

export default useFilterData;
