export enum EAvailableSizes {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
}

export type TProduct = {
  productName: string;
  productDescription: string;
  productPrice: number;
  availableSizes: EAvailableSizes[];
  images: [];
};
export interface IPageData {
  product?: TProduct[];
}
export interface IProductProps {
  pageData: {
    product: TProduct | null;
  };
}
export interface IProduct {
  props: IProductProps;
}
