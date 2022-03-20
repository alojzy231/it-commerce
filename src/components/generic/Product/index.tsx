import React from 'react';

import { TProductImage, TProduct } from '@customTypes/product';
import HighlightedTitle from '@generic/HighlightedTitle';
import { convertRichTextToReactComponent } from '@clients/contentful/dataMapper';

import {
  ProductContainer,
  ProductContentSection,
  ProductName,
  ProductDescription,
  ProductDetailsSection,
  ProductInputSection,
  ProductInputLabel,
  ProductInputSelect,
  ProductInputSelectOption,
} from './Product.styles';
import ProductImages from './ProductImages';

interface IProduct {
  productData: TProduct;
}

export default function Product({ productData }: IProduct): JSX.Element {
  const {
    productImage0,
    productImage1,
    productImage2,
    productImage3,
    productName,
    productDescription,
    productAvailableSizes,
    productAvailableQuantity,
  }: TProduct = productData;

  const productImages: [
    TProductImage,
    TProductImage | undefined,
    TProductImage | undefined,
    TProductImage | undefined,
  ] = [productImage0, productImage1, productImage2, productImage3];

  const Description = convertRichTextToReactComponent(ProductDescription, productDescription);

  const quantityOptionsArray: string[] = Array.from(
    { length: productAvailableQuantity },
    (_, index: number) => String(index + 1),
  );

  return (
    <ProductContainer>
      <ProductImages productImagesData={productImages} />
      <ProductContentSection>
        <HighlightedTitle>
          <ProductName>{productName}</ProductName>
        </HighlightedTitle>
        <ProductDetailsSection>
          {Description}

          <ProductInputSection>
            <ProductInputLabel htmlFor="size">
              Size:
              <ProductInputSelect>
                {productAvailableSizes.map((productAvailableSize) => (
                  <ProductInputSelectOption key={productAvailableSize}>
                    {productAvailableSize}
                  </ProductInputSelectOption>
                ))}
              </ProductInputSelect>
            </ProductInputLabel>
          </ProductInputSection>

          <ProductInputSection>
            <ProductInputLabel htmlFor="quantity">
              Quantity:
              <ProductInputSelect>
                {quantityOptionsArray.map((quantityNumber) => (
                  <ProductInputSelectOption key={quantityNumber}>
                    {quantityNumber}
                  </ProductInputSelectOption>
                ))}
              </ProductInputSelect>
            </ProductInputLabel>
          </ProductInputSection>
        </ProductDetailsSection>
      </ProductContentSection>
    </ProductContainer>
  );
}
