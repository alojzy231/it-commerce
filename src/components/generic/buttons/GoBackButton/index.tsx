import React from 'react';
import { useRouter } from 'next/router';

import { GoBackButtonContainer, GoBackIcon } from './GoBackButton.styles';

export default function GoBackButton(): JSX.Element {
  const router = useRouter();

  const handleClick = (): void => router.back();
  return <GoBackButtonContainer icon={<GoBackIcon />} onClick={handleClick} />;
}
