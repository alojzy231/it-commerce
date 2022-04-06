import React from 'react';

import getPageData from '@clients/contentful/getPageData';
import mapData, { sortDataForProductsPage } from '@clients/contentful/dataMapper';
import {
  IPageData,
  IProductsOnProductsPage,
  IProductsOnProductsPageProps,
  TProductOnProductsPage,
} from '@customTypes/product';
import ProductsPageContent from '@productsPage/ProductsPageContent';
import {
  ProductsPageHighlightedTitle,
  ProductsPageTitleText,
} from '@productsPage/ProductsPage.styles';
import GoBackButton from '@generic/buttons/GoBackButton';

export async function getServerSideProps(): Promise<IProductsOnProductsPage> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);
  const productsData: TProductOnProductsPage[] = sortDataForProductsPage(pageData.product);

  return {
    props: {
      pageData: {
        productsData,
      },
    },
  };
}

export default function Products({
  pageData: { productsData },
}: IProductsOnProductsPageProps): JSX.Element {
  return (
    <>
      <GoBackButton />
      <ProductsPageHighlightedTitle>
        <ProductsPageTitleText>Products</ProductsPageTitleText>
      </ProductsPageHighlightedTitle>

      <ProductsPageContent productsData={productsData} />
    </>
  );
}
