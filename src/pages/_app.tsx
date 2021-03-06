/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider as ReduxProvider } from 'react-redux';

import configureStore from '@redux/store';
import { saveShoppingCartState } from '@redux/loadShoppingCartState';
import GlobalStyle from '@styles/GlobalStyle';
import CustomThemeProvider from '@styles/CustomThemeProvider';
import theme from '@styles/theme';
import IsMobileProvider from '@contextProviders/isMobileProvider';
import Layout from '@generic/Layout';

const store = configureStore();

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    store.subscribe(() => {
      saveShoppingCartState(store.getState().shoppingCart);
    });
  });

  return (
    <>
      <Head>
        <title>IT-Commerce</title>
        <link rel="icon" href="favicon.png" type="image/x-icon" />
      </Head>
      <ReduxProvider store={store}>
        <CustomThemeProvider theme={theme}>
          <IsMobileProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </IsMobileProvider>
          <GlobalStyle />
        </CustomThemeProvider>
      </ReduxProvider>
    </>
  );
}

export default MyApp;
