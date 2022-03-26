import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TProductImage } from '@customTypes/product';
import { IOpenModalAction, openModal } from '@redux/actions/modalActions';

import {
  ProductImagesContainer,
  ProductImagesMainImage,
  ProductImagesSmallImage,
  ProductImagesSmallImageFiller,
  ProductImagesSmallImagesContainer,
} from './ProductImages.styles';

interface IProductImages {
  productImagesData: [
    TProductImage,
    TProductImage | undefined,
    TProductImage | undefined,
    TProductImage | undefined,
  ];
}

export default function ProductImages({ productImagesData }: IProductImages): JSX.Element {
  const dispatch = useDispatch();

  const [productImagesArray, setProductImagesArray] =
    useState<
      [
        TProductImage,
        TProductImage | undefined,
        TProductImage | undefined,
        TProductImage | undefined,
      ]
    >(productImagesData);

  const handleImageMagnifying = (): IOpenModalAction =>
    dispatch(openModal('magnifyImage', productImagesArray[0]));

  const changeMainImage = (index: number): void => {
    setProductImagesArray(
      (
        prevImagesArray,
      ): [
        TProductImage,
        TProductImage | undefined,
        TProductImage | undefined,
        TProductImage | undefined,
      ] => {
        const oldArray: [
          TProductImage,
          TProductImage | undefined,
          TProductImage | undefined,
          TProductImage | undefined,
        ] = [...prevImagesArray];
        const newMainImage = oldArray[0];
        oldArray[0] = oldArray[index] as TProductImage;
        oldArray[index] = newMainImage;

        return [...oldArray];
      },
    );
  };

  return (
    <ProductImagesContainer>
      <ProductImagesMainImage
        src={productImagesArray[0].url}
        alt={productImagesArray[0].title}
        onClick={handleImageMagnifying}
      />

      <ProductImagesSmallImagesContainer>
        {productImagesArray[1] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(1)}
            src={productImagesArray[1].url}
            alt={productImagesArray[1].title}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
        {productImagesArray[2] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(2)}
            src={productImagesArray[2].url}
            alt={productImagesArray[2].title}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
        {productImagesArray[3] ? (
          <ProductImagesSmallImage
            onClick={(): void => changeMainImage(3)}
            src={productImagesArray[3].url}
            alt={productImagesArray[3].title}
          />
        ) : (
          <ProductImagesSmallImageFiller />
        )}
      </ProductImagesSmallImagesContainer>
    </ProductImagesContainer>
  );
}
