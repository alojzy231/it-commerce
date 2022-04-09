import { PRODUCTS_COLLECTIONS } from './products';

export type TSubpage = {
  name: string;
  url: string;
};

type TPage = {
  name: string;
  url: string;
  subpages?: TSubpage[];
};

const subpages: TSubpage[] = PRODUCTS_COLLECTIONS.map(
  (productCollection: string): TSubpage => ({
    name: productCollection,
    url: `/products?collection=${productCollection}`,
  }),
);

const PAGES_NAMES: TPage[] = [
  {
    name: 'Sales',
    url: '/products?onSale=true',
  },
  {
    name: 'Collections',
    url: '*',
    subpages,
  },
  {
    name: 'Products',
    url: '/products',
  },
];

export default PAGES_NAMES;
