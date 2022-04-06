import React from 'react';

import AccountIcon from '@icons/AccountIcon';
import IconButton from '@generic/buttons/IconButton';

import AccountButtonContainer from './AccountButton.styles';

export default function AccountButton(): JSX.Element {
  const handleClick = (): void => {};
  return (
    <AccountButtonContainer>
      <IconButton icon={<AccountIcon />} onClick={handleClick} />
    </AccountButtonContainer>
  );
}
