import React from 'react';
import Link from 'next/link';

import { TProductOnProductsPage } from '@customTypes/product';
import ProductImages from '@generic/Product/ProductImages';

import {
  ProductsPageProductName,
  ProductsPageProductOldPrice,
  ProductsPageProductPrice,
  ProductsPageProductPriceRow,
  ProductsPageProductsContainer,
  ProductsPageProductWrapper,
} from './ProductsPageProducts.styles';

interface IProductsPageProducts {
  products: TProductOnProductsPage[];
}

export default function ProductsPageProducts({ products }: IProductsPageProducts): JSX.Element {
  return (
    <ProductsPageProductsContainer>
      {products.map(
        ({
          productId,
          productName,
          productIsOnSale,
          productPrice,
          productOldPrice,
          productImages,
        }: TProductOnProductsPage) => (
          <Link href={`./products/${productId}`} passHref key={productName}>
            <ProductsPageProductWrapper>
              <ProductImages productImagesData={productImages} isOnProductsPage />
              <ProductsPageProductName>{productName}</ProductsPageProductName>

              <ProductsPageProductPriceRow>
                {productIsOnSale && (
                  <ProductsPageProductOldPrice>{`${productOldPrice.toFixed(
                    2,
                  )}$`}</ProductsPageProductOldPrice>
                )}
                <ProductsPageProductPrice productIsOnSale={productIsOnSale}>
                  {`${productPrice.toFixed(2)}$`}
                </ProductsPageProductPrice>
              </ProductsPageProductPriceRow>
            </ProductsPageProductWrapper>
          </Link>
        ),
      )}
    </ProductsPageProductsContainer>
  );
}
