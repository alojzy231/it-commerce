import React from 'react';

import HomepageHero from '@homepage/HomepageHero';
import HomepageAboutUs from '@homepage/HomepageAboutUs';
import getPageData from '@clients/contentful/getPageData';
import mapData, { getProductOnHomepage } from '@clients/contentful/dataMapper';
import {
  IProductOnHomepageProps,
  IPageData,
  TProduct,
  IProductOnHomepage,
} from '@customTypes/product';
import Product from '@generic/Product';

export async function getServerSideProps(): Promise<IProductOnHomepage> {
  const resJson = await getPageData();
  const pageData: IPageData = mapData(resJson);

  const product: TProduct = getProductOnHomepage(pageData.product);

  return {
    props: {
      pageData: {
        product,
      },
    },
  };
}

export default function Homepage({ pageData: { product } }: IProductOnHomepageProps): JSX.Element {
  return (
    <>
      <HomepageHero />
      <Product productData={product} isOnHomepage />
      <HomepageAboutUs />
    </>
  );
}
