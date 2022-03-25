import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { openModal } from '@redux/actions/modalActions';
import Modal from '@generic/Modal';

import Navbar from './Navbar';
import Footer from './Footer';
import { LayoutMain, LayoutWrapper } from './Layout.styles';

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openModal('disclaimer'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LayoutWrapper>
      <Modal />
      <Navbar />
      <LayoutMain>{children}</LayoutMain>
      <Footer />
    </LayoutWrapper>
  );
}
