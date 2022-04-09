import { ESortByOptions } from '@consts/products';
import { TProduct } from '@customTypes/product';

const sortByNewest = (products: TProduct[]): TProduct[] => {
  const sortedProducts = [...products];

  sortedProducts.sort(
    (prevProduct, currProduct): number =>
      Date.parse(currProduct.productDate) - Date.parse(prevProduct.productDate),
  );

  return sortedProducts;
};

const sortByOldest = (products: TProduct[]): TProduct[] => {
  const sortedProducts = [...products];

  sortedProducts.sort(
    (prevProduct, currProduct): number =>
      Date.parse(prevProduct.productDate) - Date.parse(currProduct.productDate),
  );

  return sortedProducts;
};

const sortByPriceLowest = (products: TProduct[]): TProduct[] => {
  const sortedProducts = [...products];

  sortedProducts.sort(
    (prevProduct, currProduct): number => prevProduct.productPrice - currProduct.productPrice,
  );

  return sortedProducts;
};

const sortByPriceHighest = (products: TProduct[]): TProduct[] => {
  const sortedProducts = [...products];

  sortedProducts.sort(
    (prevProduct, currProduct): number => currProduct.productPrice - prevProduct.productPrice,
  );

  return sortedProducts;
};

const productsSortBy = (products: TProduct[], sortByOption: number): TProduct[] => {
  let sortedProducts: TProduct[] = [...products];

  switch (sortByOption) {
    case ESortByOptions.oldest:
      sortedProducts = sortByOldest(sortedProducts);
      break;
    case ESortByOptions['price by lowest']:
      sortedProducts = sortByPriceLowest(sortedProducts);
      break;
    case ESortByOptions['price by highest']:
      sortedProducts = sortByPriceHighest(sortedProducts);
      break;
    default:
      sortedProducts = sortByNewest(sortedProducts);
  }

  return sortedProducts;
};

export default productsSortBy;
