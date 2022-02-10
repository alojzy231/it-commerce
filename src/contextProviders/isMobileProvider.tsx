/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { medias } from '@styles/theme';
import toggleIsMobile from '@redux/actions/isMobileActions';

interface IIsMobileProvider {
  children: React.ReactNode;
}

export default function IsMobileProvider({ children }: IIsMobileProvider): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = (): void => {
      const isMobile = window.matchMedia(`(max-width: ${medias.tablet})`).matches;

      dispatch(toggleIsMobile(isMobile));
    };

    handleResize();

    window.addEventListener('resize', handleResize);
  }, [dispatch]);

  return <div>{children}</div>;
}
