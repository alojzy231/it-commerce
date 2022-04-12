export const PRODUCT_MIN_PRICE = 0;
export const PRODUCT_MAX_PRICE = 100;

export enum ESortByOptions {
  'newest' = 'newest',
  'oldest' = 'oldest',
  'price by lowest' = 'price by lowest',
  'price by highest' = 'price by highest',
}

export enum EProductsCollections {
  CSS = 'CSS',
  DevOps = 'DevOps',
  Linux = 'Linux',
  HTML = 'HTML',
}

export enum EProductsSizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
}

export const SORT_BY_OPTIONS: string[] = [
  'newest',
  'oldest',
  'price by lowest',
  'price by highest',
];
export const PRODUCTS_COLLECTIONS: string[] = ['CSS', 'DevOps', 'Linux', 'HTML'];
export const PRODUCTS_SIZES: string[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
