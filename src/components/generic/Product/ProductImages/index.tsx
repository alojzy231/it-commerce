import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { TProductImage, TProductImages } from '@customTypes/product';
import { openModal } from '@redux/actions/modalActions';

import {
  ProductImagesContainer,
  ProductImagesMainImage,
  ProductImagesSmallImage,
  ProductImagesSmallImageFiller,
  ProductImagesSmallImagesContainer,
} from './ProductImages.styles';

interface IProductImages {
  productImagesData: TProductImages;
  isOnProductsPage?: boolean;
}

export default function ProductImages({
  productImagesData,
  isOnProductsPage,
}: IProductImages): JSX.Element {
  const dispatch = useDispatch();

  const [productImagesArray, setProductImagesArray] = useState<TProductImages>(productImagesData);

  useEffect(() => {
    setProductImagesArray(productImagesData);
  }, [productImagesArray, productImagesData]);

  const handleImageMagnifying = (): void => {
    if (!isOnProductsPage) {
      dispatch(openModal('magnifyImage', productImagesArray[0]));
    }
  };

  const changeMainImage = (index: number): void => {
    if (!isOnProductsPage) {
      setProductImagesArray((prevImagesArray): TProductImages => {
        const oldArray: TProductImages = [...prevImagesArray];
        const newMainImage = oldArray[0];
        oldArray[0] = oldArray[index] as TProductImage;
        oldArray[index] = newMainImage;

        return [...oldArray];
      });
    }
  };

  return (
    <ProductImagesContainer isOnProductsPage={isOnProductsPage}>
      <ProductImagesMainImage
        src={productImagesArray[0].url}
        alt={productImagesArray[0].title}
        onClick={handleImageMagnifying}
        isOnProductsPage={isOnProductsPage}
        key={productImagesArray[0].url}
      />

      <ProductImagesSmallImagesContainer isOnProductsPage={isOnProductsPage}>
        {productImagesArray[1] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(1)}
            src={productImagesArray[1].url}
            alt={productImagesArray[1].title}
            isOnProductsPage={isOnProductsPage}
            key={productImagesArray[1].url}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
        {productImagesArray[2] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(2)}
            src={productImagesArray[2].url}
            alt={productImagesArray[2].title}
            isOnProductsPage={isOnProductsPage}
            key={productImagesArray[2].url}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
        {productImagesArray[3] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(3)}
            src={productImagesArray[3].url}
            alt={productImagesArray[3].title}
            isOnProductsPage={isOnProductsPage}
            key={productImagesArray[3].url}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
      </ProductImagesSmallImagesContainer>
    </ProductImagesContainer>
  );
}

ProductImages.defaultProps = {
  isOnProductsPage: false,
};
