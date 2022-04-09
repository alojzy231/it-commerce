import React, { useState } from 'react';
import Link from 'next/link';

import { convertRichTextToReactComponent } from '@clients/contentful/dataMapper';
import { TProduct } from '@customTypes/product';
import { EProductsSizes } from '@consts/products';
import HighlightedTitle from '@generic/HighlightedTitle';
import InputLabel from '@generic/inputs/InputLabel.styles';
import SelectInput from '@generic/inputs/SelectInput.styles';
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
    productName,
    productDescription,
    productIsOnSale,
    productImages,
    productPrice,
    productOldPrice,
    productAvailableColors,
    productAvailableSizes,
  }: TProduct = productData;

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
                <InputLabel htmlFor="colors">
                  Colors:
                  <SelectInput>
                    {productAvailableColors.map(
                      (productAvailableColor: string): JSX.Element => (
                        <option key={productAvailableColor} value={productAvailableColor}>
                          {productAvailableColor}
                        </option>
                      ),
                    )}
                  </SelectInput>
                </InputLabel>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
                <InputLabel htmlFor="size">
                  Size:
                  <SelectInput>
                    {productAvailableSizes.map(
                      (productAvailableSize: EProductsSizes): JSX.Element => (
                        <option key={productAvailableSize} value={productAvailableSize}>
                          {productAvailableSize}
                        </option>
                      ),
                    )}
                  </SelectInput>
                </InputLabel>
                <ProductGenericButton onClick={(): void => {}}>Add to cart</ProductGenericButton>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
                <InputLabel htmlFor="quantity">
                  Quantity:
                  <ProductInputQuantityNumber
                    value={productQuantity}
                    onChange={handleProductQuantityChange}
                  />
                </InputLabel>
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
