import React from 'react';

import getPageData from '@clients/contentful/getPageData';
import mapData, { sortProductsData } from '@clients/contentful/dataMapper';
import { IPageData, IProductsGetData, IProductsProps, TProduct } from '@customTypes/product';
import ProductsPageContent from '@productsPage/ProductsPageContent';
import {
  ProductsPageHighlightedTitle,
  ProductsPageTitleText,
} from '@productsPage/ProductsPage.styles';
import GoBackButton from '@generic/buttons/GoBackButton';

export async function getServerSideProps(): Promise<IProductsGetData> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);
  const productsData: TProduct[] = sortProductsData(pageData.product);

  return {
    props: {
      pageData: {
        productsData,
      },
    },
  };
}

export default function Products({ pageData: { productsData } }: IProductsProps): JSX.Element {
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
