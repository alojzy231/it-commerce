import React, { useState } from 'react';
import Link from 'next/link';

import { convertRichTextToReactComponent } from '@clients/contentful/dataMapper';
import { TProductImage, TProduct } from '@customTypes/product';
import HighlightedTitle from '@generic/HighlightedTitle';
import GenericButton from '@generic/buttons/GenericButton';

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
  ProductGenericButton,
  ProductPrice,
  ProductOldPrice,
  ProductDetailsPriceRow,
  ProductInputQuantityNumber,
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
  }: TProduct = productData;

  const productImages: [
    TProductImage,
    TProductImage | undefined,
    TProductImage | undefined,
    TProductImage | undefined,
  ] = [productImage0, productImage1, productImage2, productImage3];

  const [productQuantity, setProductQuantity] = useState<number>(1);

  const price = `${productPrice.toFixed(2)}$`;

  const oldPrice = productIsOnSale ? `${productOldPrice.toFixed(2)}$` : null;

  const Description = convertRichTextToReactComponent(ProductDescription, productDescription);

  const handleProductQuantityChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const quantity: number = parseInt(value, 10);

    if (quantity > 0 || !quantity) {
      setProductQuantity(quantity);
    }
  };

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
            <Link href={`products/${productId}`} passHref>
              <ProductSeeProductButton>
                <GenericButton>See product</GenericButton>
              </ProductSeeProductButton>
            </Link>
          ) : (
            <>
              <ProductDetailsSectionRow>
                <ProductInputLabel htmlFor="colors">
                  Colors:
                  <ProductInputSelect>
                    {productAvailableColors.map((productAvailableColor) => (
                      <option key={productAvailableColor}>{productAvailableColor}</option>
                    ))}
                  </ProductInputSelect>
                </ProductInputLabel>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
                <ProductInputLabel htmlFor="size">
                  Size:
                  <ProductInputSelect>
                    {productAvailableSizes.map((productAvailableSize) => (
                      <option key={productAvailableSize}>{productAvailableSize}</option>
                    ))}
                  </ProductInputSelect>
                </ProductInputLabel>
                <ProductGenericButton onClick={(): void => {}}>Add to cart</ProductGenericButton>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
                <ProductInputLabel htmlFor="quantity">
                  Quantity:
                  <ProductInputQuantityNumber
                    value={productQuantity}
                    onChange={handleProductQuantityChange}
                  />
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
