import React from 'react';
import { useRouter } from 'next/router';

import {
  Custom404Container,
  Custom404Title,
  Custom404Subtitle,
  Custom404GoToHomepageButton,
} from 'src/components/Custom404/Custom404.styles';

export default function Custom404(): JSX.Element {
  const router = useRouter();

  const handleGoBackToHome = (): Promise<boolean> => router.push('/');

  return (
    <Custom404Container>
      <Custom404Title>4😮4</Custom404Title>
      <Custom404Subtitle>
        The page you were looking for was moved or doesn&apos;t exist.
      </Custom404Subtitle>
      <Custom404Subtitle>Let&apos;s get you back.</Custom404Subtitle>
      <Custom404GoToHomepageButton onClick={handleGoBackToHome}>
        Back to home
      </Custom404GoToHomepageButton>
    </Custom404Container>
  );
}
