import React from 'react';

import { TProductOnProductsPage } from '@customTypes/product';

import ProductsPageProducts from './ProductsPageProducts';
import {
  ProductsPageContentContainer,
  ProductsPageSearchInputsContainer,
  ProductsPageSearchInput,
} from './ProductsPageContent.styles';

interface IProductsPageContent {
  products: TProductOnProductsPage[];
}

export default function ProductsPageContent({ products }: IProductsPageContent): JSX.Element {
  return (
    <ProductsPageContentContainer>
      <ProductsPageSearchInputsContainer>
        <ProductsPageSearchInput />
      </ProductsPageSearchInputsContainer>

      <ProductsPageProducts products={products} />
    </ProductsPageContentContainer>
  );
}
