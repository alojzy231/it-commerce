import React from 'react';
import { useRouter } from 'next/router';

import { TProductImage, TProduct } from '@customTypes/product';
import HighlightedTitle from '@generic/HighlightedTitle';
import { convertRichTextToReactComponent } from '@clients/contentful/dataMapper';

import {
  ProductContainer,
  ProductContentSection,
  ProductName,
  ProductNameOnHomepage,
  ProductSeeProductButton,
  ProductDescription,
  ProductDetailsSection,
  ProductDetailsSectionRow,
  ProductInputLabel,
  ProductInputSelect,
  ProductInputSelectOption,
  ProductGenericButton,
  ProductPrice,
  ProductOldPrice,
  ProductDetailsPriceRow,
} from './Product.styles';
import ProductImages from './ProductImages';

interface IProduct {
  productData: TProduct;
  isOnHomepage?: boolean;
}

export default function Product({ productData, isOnHomepage }: IProduct): JSX.Element {
  const {
    productId,
    productImage0,
    productImage1,
    productImage2,
    productImage3,
    productName,
    productDescription,
    productIsOnSale,
    productPrice,
    productOldPrice,
    productAvailableColors,
    productAvailableSizes,
    productAvailableQuantity,
  }: TProduct = productData;

  const productImages: [
    TProductImage,
    TProductImage | undefined,
    TProductImage | undefined,
    TProductImage | undefined,
  ] = [productImage0, productImage1, productImage2, productImage3];

  const router = useRouter();

  const price = `${productPrice.toFixed(2)}$`;

  const oldPrice = productIsOnSale ? `${productOldPrice.toFixed(2)}$` : null;

  const Description = convertRichTextToReactComponent(ProductDescription, productDescription);

  const quantityOptionsArray: string[] = Array.from(
    { length: productAvailableQuantity },
    (_, index: number) => String(index + 1),
  );

  const goToProductPage = (): Promise<boolean> => router.push(`products/${productId}`);

  return (
    <ProductContainer>
      <ProductImages productImagesData={productImages} />
      <ProductContentSection>
        <HighlightedTitle>
          <ProductName>{isOnHomepage ? 'Check this out' : productName}</ProductName>
        </HighlightedTitle>
        {isOnHomepage && <ProductNameOnHomepage>{productName}</ProductNameOnHomepage>}
        <ProductDetailsSection>
          {Description}

          <ProductDetailsPriceRow>
            {productIsOnSale && <ProductOldPrice>{oldPrice}</ProductOldPrice>}
            <ProductPrice productIsOnSale={productIsOnSale}>{price}</ProductPrice>
          </ProductDetailsPriceRow>
          {isOnHomepage ? (
            <ProductSeeProductButton onClick={goToProductPage}>See product</ProductSeeProductButton>
          ) : (
            <>
              <ProductDetailsSectionRow>
                <ProductInputLabel htmlFor="colors">
                  Colors:
                  <ProductInputSelect>
                    {productAvailableColors.map((productAvailableColor) => (
                      <ProductInputSelectOption key={productAvailableColor}>
                        {productAvailableColor}
                      </ProductInputSelectOption>
                    ))}
                  </ProductInputSelect>
                </ProductInputLabel>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
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
                <ProductGenericButton onClick={(): void => {}}>Add to cart</ProductGenericButton>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
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
                <ProductGenericButton onClick={(): void => {}}>Buy now</ProductGenericButton>
              </ProductDetailsSectionRow>
            </>
          )}
        </ProductDetailsSection>
      </ProductContentSection>
    </ProductContainer>
  );
}

Product.defaultProps = {
  isOnHomepage: false,
};
