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
  tints: {
    primaryTint20: '#C9C4BB',
  },
};

const theme: DefaultTheme = {
  colors,
};

export default theme;
