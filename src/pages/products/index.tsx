import React from 'react';
import Link from 'next/link';

import getPageData from '@clients/contentful/getPageData';
import mapData, { sortDataForProductsPage } from '@clients/contentful/dataMapper';
import { IPageData, IProducts, IProductsProps, TProductOnProductsPage } from '@customTypes/product';
import ProductImages from '@generic/Product/ProductImages';
import {
  ProductsPageHighlightedTitle,
  ProductsPageTitleText,
  ProductsPageSearchInputsContainer,
  ProductsPageProductsContainer,
  ProductsPageProductWrapper,
  ProductsPageProductName,
  ProductsPageProductPriceRow,
  ProductsPageProductOldPrice,
  ProductsPageProductPrice,
  ProductsPageContentWrapper,
} from '@productsPage/ProductsPage.styles';
import ProductsPageSearchInput from '@productsPage/ProductsPageSearchInput';

export async function getServerSideProps(): Promise<IProducts> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);
  const products: TProductOnProductsPage[] = sortDataForProductsPage(pageData.product);

  return {
    props: {
      pageData: {
        products,
      },
    },
  };
}

export default function Products({ pageData: { products } }: IProductsProps): JSX.Element {
  return (
    <>
      <ProductsPageHighlightedTitle>
        <ProductsPageTitleText>Products</ProductsPageTitleText>
      </ProductsPageHighlightedTitle>

      <ProductsPageContentWrapper>
        <ProductsPageSearchInputsContainer>
          <ProductsPageSearchInput />
        </ProductsPageSearchInputsContainer>

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
      </ProductsPageContentWrapper>
    </>
  );
}
