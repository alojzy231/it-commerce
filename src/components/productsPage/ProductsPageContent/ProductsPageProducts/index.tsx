import React from 'react';
import Link from 'next/link';

import { TProduct } from '@customTypes/product';
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
  products: TProduct[];
}

export default function ProductsPageProducts({ products }: IProductsPageProducts): JSX.Element {
  return (
    <ProductsPageProductsContainer>
      {products &&
        products.map(
          ({
            productId,
            productName,
            productIsOnSale,
            productPrice,
            productOldPrice,
            productImages,
          }: TProduct) => (
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
