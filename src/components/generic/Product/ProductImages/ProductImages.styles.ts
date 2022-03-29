import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

interface IProductImagesProps {
  isOnProductsPage?: boolean;
}

const imageMouseInteractionsStyle = css`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const ProductImagesContainer = styled.div<IProductImagesProps>`
  max-width: 55rem;
  width: 100%;
  margin: ${({ isOnProductsPage }): string => (isOnProductsPage ? '0 0 1rem 0' : ' 0 3.2rem;')};
`;
export const ProductImagesMainImage = styled.img<IProductImagesProps>`
  width: 100%;

  aspect-ratio: 1 / 1;

  object-fit: cover;

  ${({ isOnProductsPage }): string | FlattenSimpleInterpolation =>
    isOnProductsPage ? '' : imageMouseInteractionsStyle}
`;
export const ProductImagesSmallImagesContainer = styled.div<IProductImagesProps>`
  width: 100%;

  margin-top: ${({ isOnProductsPage }): string => (isOnProductsPage ? '3%' : '3.2rem')};

  display: flex;
  justify-content: space-between;
`;
export const ProductImagesSmallImageFiller = styled.div`
  width: 30%;

  aspect-ratio: 1 / 1;

  background-color: ${({ theme: { colors } }): string => colors.unloaded};
`;
export const ProductImagesSmallImage = styled.img<IProductImagesProps>`
  width: 30%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  ${({ isOnProductsPage }): string | FlattenSimpleInterpolation =>
    isOnProductsPage ? '' : imageMouseInteractionsStyle}
`;
