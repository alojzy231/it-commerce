/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';

import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';
import Layout from '@generic/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>IT-Commerce</title>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
