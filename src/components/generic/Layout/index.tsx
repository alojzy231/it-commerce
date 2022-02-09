import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import { LayoutMain, LayoutWrapper } from './Layout.styles';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <LayoutWrapper>
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </LayoutWrapper>
  );
}
