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

export enum EAvailableSizes {
  XS,
  S,
  M,
  L,
  XL,
  XXL,
}

export type TProduct = {
  productId;
  productImage0: TProductImage;
  productImage1?: TProductImage;
  productImage2?: TProductImage;
  productImage3?: TProductImage;
  productName: string;
  productDescription: string;
  productIsOnSale: boolean;
  productPrice: number;
  productOldPrice: number;
  productAvailableColors: string[];
  productAvailableSizes: EAvailableSizes[];
  images: [];
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

export type TProductOnProductsPage = {
  productId: number;
  productName: string;
  productIsOnSale: boolean;
  productPrice: number;
  productOldPrice: number;
  productImages: TProductImages;
};

export interface IProductsOnProductsPageProps {
  pageData: {
    productsData: TProductOnProductsPage[];
  };
}
export interface IProductsOnProductsPage {
  props: IProductsOnProductsPageProps;
}

export type TProductOnHomepage = {
  productId: number;
  productName: string;
  productIsOnSale: boolean;
  productPrice: number;
  productOldPrice: number;
  productImages: TProductImages;
};

export interface IProductOnHomepageProps {
  pageData: {
    product: TProduct;
  };
}
export interface IProductOnHomepage {
  props: IProductOnHomepageProps;
}
