export type TProductImage = {
  title: string;
  url: string;
};

export enum EAvailableSizes {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
}

export type TProduct = {
  productImage0: TProductImage;
  productImage1?: TProductImage;
  productImage2?: TProductImage;
  productImage3?: TProductImage;
  productName: string;
  productDescription: string;
  productPrice: number;
  productAvailableSizes: EAvailableSizes[];
  productAvailableQuantity: number;
  images: [];
};
export interface IPageData {
  product?: TProduct[];
}
export interface IProductProps {
  pageData: {
    product: TProduct;
  };
}
export interface IProduct {
  props: IProductProps;
}
