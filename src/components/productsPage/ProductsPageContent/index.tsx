import React, { useEffect, useState } from 'react';

import { TProductOnProductsPage } from '@customTypes/product';

import ProductsPageProducts from './ProductsPageProducts';
import {
  ProductsPageContentContainer,
  ProductsPageSearchInputsContainer,
  ProductsPageSearchInput,
} from './ProductsPageContent.styles';

interface IProductsPageContent {
  productsData: TProductOnProductsPage[];
}

export default function ProductsPageContent({ productsData }: IProductsPageContent): JSX.Element {
  const [products, setProducts] = useState<TProductOnProductsPage[]>(productsData);
  const [searchInputValue, setSearchInputValue] = useState<string>('');

  useEffect((): void => {
    if (searchInputValue) {
      setProducts(
        productsData.filter(({ productName }: TProductOnProductsPage) =>
          productName.toLowerCase().includes(searchInputValue),
        ),
      );
    } else {
      setProducts(productsData);
    }
  }, [productsData, searchInputValue]);

  const handleSearchInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchInputValue(target.value);

  return (
    <ProductsPageContentContainer>
      <ProductsPageSearchInputsContainer>
        <ProductsPageSearchInput onChange={handleSearchInputChange} value={searchInputValue} />
      </ProductsPageSearchInputsContainer>

      <ProductsPageProducts products={products} />
    </ProductsPageContentContainer>
  );
}
