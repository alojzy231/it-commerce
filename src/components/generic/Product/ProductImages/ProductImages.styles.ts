import styled from 'styled-components';

export const ProductImagesContainer = styled.div`
  max-width: 55rem;
  width: 100%;
  margin: 0 3.2rem;
`;
export const ProductImagesMainImage = styled.img`
  width: 100%;

  aspect-ratio: 1 / 1;

  object-fit: cover;

  cursor: zoom-in;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
export const ProductImagesSmallImagesContainer = styled.div`
  width: 100%;

  margin-top: 3.2rem;

  display: flex;
  justify-content: space-between;
`;
export const ProductImagesSmallImageFiller = styled.div`
  width: 30%;

  aspect-ratio: 1 / 1;

  background-color: ${({ theme: { colors } }): string => colors.unloaded};
`;
export const ProductImagesSmallImage = styled.img`
  width: 30%;
  aspect-ratio: 1 / 1;
  object-fit: cover;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
