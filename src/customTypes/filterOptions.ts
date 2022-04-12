import { EProductsCollections, EProductsSizes, ESortByOptions } from '@consts/products';

export interface IFilterQueryOptions {
  sortBy?: ESortByOptions;
  search?: string;
  collection?: EProductsCollections;
  size?: EProductsSizes;
  priceMin?: number;
  priceMax?: number;
  onSale?: string;
}

export interface IFilterTranslatedOptions {
  sortBy?: ESortByOptions;
  search?: string;
  collection?: EProductsCollections;
  size?: EProductsSizes;
  priceMin?: number;
  priceMax?: number;
  onSale?: boolean;
}
