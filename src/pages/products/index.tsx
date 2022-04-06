import React from 'react';

import getPageData from '@clients/contentful/getPageData';
import mapData, { sortDataForProductsPage } from '@clients/contentful/dataMapper';
import { IPageData, IProducts, IProductsProps, TProductOnProductsPage } from '@customTypes/product';
import ProductsPageContent from '@productsPage/ProductsPageContent';
import {
  ProductsPageHighlightedTitle,
  ProductsPageTitleText,
} from '@productsPage/ProductsPage.styles';

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

      <ProductsPageContent products={products} />
    </>
  );
}
