import { EProductsCollections, EProductsSizes } from '@consts/products';
import { TProduct } from '@customTypes/product';

export const filterBySearch = (products: TProduct[], search: string): TProduct[] => {
  const filteredProducts = [...products];

  return filteredProducts.filter(({ productName }: TProduct) =>
    productName.toLowerCase().replace(/\s/g, '').includes(search),
  );
};

export const filterByCollection = (products: TProduct[], collection: string): TProduct[] => {
  const filteredProducts = [...products];

  return filteredProducts.filter(
    (product): boolean =>
      EProductsCollections[product.productCollection] === EProductsCollections[collection],
  );
};

export const filterBySize = (products: TProduct[], size: EProductsSizes): TProduct[] => {
  const filteredProducts = [...products];

  return filteredProducts.filter((product): boolean =>
    product.productAvailableSizes.some(
      (availableSize: EProductsSizes) => availableSize === EProductsSizes[size],
    ),
  );
};

export const filterByPrice = (
  products: TProduct[],
  priceMin: number,
  priceMax: number,
): TProduct[] => {
  const filteredProducts = [...products];

  return filteredProducts.filter(
    (product): boolean => product.productPrice >= priceMin && product.productPrice <= priceMax,
  );
};

export const filterByIsOnSale = (products: TProduct[]): TProduct[] => {
  const filteredProducts = [...products];

  return filteredProducts.filter((product): boolean => product.productIsOnSale);
};
