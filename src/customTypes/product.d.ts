import { EProductsCollections } from '@consts/products';

export interface IProductContext {
  query: {
    productId: string;
  };
}

export type TProductImage = {
  title: string;
  url: string;
};

export type TProductOptionalImage = TProductImage | null | undefined;
export type TProductImages = [
  TProductImage,
  TProductOptionalImage,
  TProductOptionalImage,
  TProductOptionalImage,
];

export type TShoppingCartProduct = {
  productId: string;
  productName: string;
  productImage: TProductImage;
  color: string;
  size: EProductsSizes;
  price: number;
  quantity: number;
};

export type TProduct = {
  productId: string;
  productDate: string;
  productImages: TProductImages;
  productName: string;
  productDescription: string;
  productIsOnSale: boolean;
  productPrice: number;
  productOldPrice: number;
  productAvailableColors: string[];
  productAvailableSizes: EProductsSizes[];
  productCollection: EProductsCollections;
};
export interface IPageData {
  product?: TProduct[];
}
export interface IProductPageProps {
  pageData: {
    product: TProduct;
  };
}
export interface IProductPageData {
  props: IProductProps;
}
export interface IProductNotFound {
  notFound: boolean;
}

export interface IProductHomepageProps {
  pageData: {
    productData: TProduct;
  };
}
export interface IProductHomepageGetData {
  props: IProductHompegeProps;
}

export interface IProductsProps {
  pageData: {
    productsData: TProduct[];
  };
}
export interface IProductsGetData {
  props: IProductsProps;
}
