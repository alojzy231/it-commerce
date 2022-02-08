/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={{}}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
