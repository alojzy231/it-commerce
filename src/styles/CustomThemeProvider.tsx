import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { RootState } from '@redux/reducers';

interface ICustomThemeProvider {
  children: React.ReactChild[];
  theme: {};
}

export default function CustomThemeProvider({
  children,
  theme,
}: ICustomThemeProvider): JSX.Element {
  const { isOpened: hideOverflowOnBody } = useSelector((state: RootState) => state.modal);

  return <ThemeProvider theme={{ ...theme, hideOverflowOnBody }}>{children}</ThemeProvider>;
}
