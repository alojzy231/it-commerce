import React from 'react';

import HomepageHero from '@homepage/HomepageHero';
import HomepageAboutUs from '@homepage/HomepageAboutUs';
import getPageData from '@clients/contentful/getPageData';
import mapData, { getProductOnHomepage } from '@clients/contentful/dataMapper';
import {
  IProductHomepageProps,
  IPageData,
  TProduct,
  IProductHomepageGetData,
} from '@customTypes/product';
import Product from '@generic/Product';

export async function getServerSideProps(): Promise<IProductHomepageGetData> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);

  const productData: TProduct = getProductOnHomepage(pageData.product);

  return {
    props: {
      pageData: {
        productData,
      },
    },
  };
}

export default function Homepage({
  pageData: { productData },
}: IProductHomepageProps): JSX.Element {
  return (
    <>
      <HomepageHero />
      <Product productData={productData} isOnHomepage />
      <HomepageAboutUs />
    </>
  );
}
