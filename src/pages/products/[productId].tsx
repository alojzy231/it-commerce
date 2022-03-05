import React from 'react';

import getPageData from '@clients/contentful/getPageData';
import mapData, { getProductById } from '@clients/contentful/dataMapper';
import { IPageData, IProductProps, IProduct, TProduct } from '@customTypes/product';

interface IProductContext {
  query: {
    productId: string;
  };
}

export async function getServerSideProps(context: IProductContext): Promise<IProduct> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);

  const { productId } = context.query;

  const product: TProduct = getProductById(pageData.product, productId);

  return {
    props: {
      pageData: {
        product,
      },
    },
  };
}

export default function Product({ pageData: { product } }: IProductProps): JSX.Element {
  return <div>{product?.productName}</div>;
}
