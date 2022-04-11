import { DefaultTheme } from 'styled-components';

interface IColors {
  primary: string;
  secondary: string;
  yellow: string;
  background: string;
  selected: string;
  unloaded: string;
  black: string;
  white: string;
  closeButton: string;
  backgroundShade: string;
  tints: {
    primaryTint20: string;
  };
}

export const colors: IColors = {
  primary: '#D5D1C9',
  secondary: '#376EA7',
  yellow: '#F2E499',
  background: '#EAEBF0',
  selected: '#1660E8',
  unloaded: '#C4C4C4',
  black: '#000000',
  white: '#FFFFFF',
  closeButton: '#EC3030',
  backgroundShade: '#00000099',
  tints: {
    primaryTint20: '#C9C4BB',
  },
};

interface IMedias {
  desktop: string;
  tablet: string;
  bigMobile: string;
  mobile: string;
  mediumMobile: string;
  smallMobile: string;
}

export const medias: IMedias = {
  desktop: '1440px',
  tablet: '1200px',
  bigMobile: '800px',
  mobile: '690px',
  mediumMobile: '500px',
  smallMobile: '440px',
};

export interface ITheme extends DefaultTheme {
  colors: IColors;
  medias: IMedias;
  hideOverflowOnBody: boolean;
}

const theme: ITheme = {
  colors,
  medias,
  hideOverflowOnBody: false,
};

export default theme;
