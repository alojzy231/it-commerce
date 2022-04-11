import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import { convertRichTextToReactComponent } from '@clients/contentful/dataMapper';
import { TProduct } from '@customTypes/product';
import { EProductsSizes } from '@consts/products';
import HighlightedTitle from '@generic/HighlightedTitle';
import InputLabel from '@generic/inputs/InputLabel.styles';
import SelectInput from '@generic/inputs/SelectInput.styles';
import GenericButton from '@generic/buttons/GenericButton';
import { addItemToShoppingCart } from '@redux/actions/shoppingCartActions';
import { openModal } from '@redux/actions/modalActions';

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

interface IProductInputsValues {
  color: string;
  size: EProductsSizes;
  quantity: number;
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

  const dispatch = useDispatch();

  const [productInputsValues, setProductIputsValues] = useState<IProductInputsValues>({
    color: productAvailableColors[0],
    size: EProductsSizes[productAvailableSizes[0]],
    quantity: 1,
  });

  const price = `${productPrice.toFixed(2)}$`;

  const oldPrice = productIsOnSale ? `${productOldPrice.toFixed(2)}$` : null;

  const Description = convertRichTextToReactComponent(ProductDescription, productDescription);

  const handleProductColorChange = ({ target }: React.ChangeEvent<HTMLSelectElement>): void => {
    setProductIputsValues((prevState: IProductInputsValues) => ({
      ...prevState,
      color: target.value,
    }));
  };

  const handleProductSizeChange = ({ target }: React.ChangeEvent<HTMLSelectElement>): void => {
    setProductIputsValues((prevState: IProductInputsValues) => ({
      ...prevState,
      size: EProductsSizes[target.value],
    }));
  };

  const handleProductQuantityChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
    const quantity: number = parseInt(target.value, 10);

    if (quantity > 0 || !quantity) {
      setProductIputsValues((prevState: IProductInputsValues) => ({ ...prevState, quantity }));
    }
  };

  const handleAddToCart = (): void => {
    dispatch(
      addItemToShoppingCart({
        ...productInputsValues,
        productId,
        productName,
        price: productPrice,
        productImage: productImages[0],
        quantity: productInputsValues.quantity || 1,
      }),
    );
  };

  const handleBuyNow = (): void => {
    dispatch(
      addItemToShoppingCart({
        ...productInputsValues,
        productId,
        productName,
        price: productPrice,
        productImage: productImages[0],
        quantity: productInputsValues.quantity || 1,
      }),
    );
    dispatch(openModal('shoppingCart'));
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
                  <SelectInput onChange={handleProductColorChange}>
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
                  <SelectInput onChange={handleProductSizeChange}>
                    {productAvailableSizes.map(
                      (productAvailableSize: EProductsSizes): JSX.Element => (
                        <option key={productAvailableSize} value={productAvailableSize}>
                          {productAvailableSize}
                        </option>
                      ),
                    )}
                  </SelectInput>
                </InputLabel>
                <ProductGenericButton onClick={handleAddToCart}>Add to cart</ProductGenericButton>
              </ProductDetailsSectionRow>

              <ProductDetailsSectionRow>
                <InputLabel htmlFor="quantity">
                  Quantity:
                  <ProductInputQuantityNumber
                    value={productInputsValues.quantity || ''}
                    onChange={handleProductQuantityChange}
                  />
                </InputLabel>
                <ProductGenericButton onClick={handleBuyNow}>Buy now</ProductGenericButton>
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
