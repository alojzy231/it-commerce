import React from 'react';

import getPageData from '@clients/contentful/getPageData';
import mapData, { getProductById } from '@clients/contentful/dataMapper';
import {
  IProductContext,
  IPageData,
  IProductPageProps,
  IProductPageData,
  TProduct,
  IProductNotFound,
} from '@customTypes/product';
import Product from '@generic/Product';

export async function getServerSideProps(
  context: IProductContext,
): Promise<IProductPageData | IProductNotFound> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);

  const { productId } = context.query;

  const product: TProduct = getProductById(pageData.product, productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pageData: {
        product,
      },
    },
  };
}

export default function ProductPage({ pageData: { product } }: IProductPageProps): JSX.Element {
  return <Product productData={product} />;
}
