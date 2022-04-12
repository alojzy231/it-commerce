import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { TProduct } from '@customTypes/product';
import SearchInput from '@generic/inputs/SearchInput.styles';
import useFilterData from '@hooks/useFilterData';

import ProductsPageProducts from './ProductsPageProducts';
import {
  ProductsPageContentContainer,
  ProductsPageSearchInputsContainer,
  ProductsPageFilterByButton,
  ProductsPageProductsNotFound,
} from './ProductsPageContent.styles';

interface IProductsPageContent {
  productsData: TProduct[];
}

export default function ProductsPageContent({ productsData }: IProductsPageContent): JSX.Element {
  const router = useRouter();

  const products: TProduct[] = useFilterData(productsData);

  const [searchInputValue, setSearchInputValue] = useState<string>('');

  useEffect((): void => {
    const { query } = router;

    if (searchInputValue) {
      const search = searchInputValue.toLowerCase().replace(/\s/g, '');

      router.push({ query: { ...query, search } }, undefined, { shallow: true });
    } else {
      delete query.search;
      router.push({ query }, undefined, { shallow: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsData, searchInputValue]);

  const handleSearchInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchInputValue(target.value);

  return (
    <ProductsPageContentContainer>
      <ProductsPageSearchInputsContainer>
        <SearchInput
          onChange={handleSearchInputChange}
          value={searchInputValue}
          placeholder="Search"
        />
        <ProductsPageFilterByButton />
      </ProductsPageSearchInputsContainer>
      {products.length > 0 ? (
        <ProductsPageProducts products={products} />
      ) : (
        <ProductsPageProductsNotFound>Not Found</ProductsPageProductsNotFound>
      )}
    </ProductsPageContentContainer>
  );
}
