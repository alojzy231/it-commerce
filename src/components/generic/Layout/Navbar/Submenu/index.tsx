import React from 'react';
import Link from 'next/link';

import { TSubpage } from '@consts/pagesNames';

import { SubmenuContainer, SubmenuOption } from './Submenu.styles';

interface ISubmenu {
  className?: string;
  subpages: TSubpage[] | undefined;
}

export default function Submenu({ className, subpages }: ISubmenu): JSX.Element {
  return (
    <SubmenuContainer className={className}>
      {!!subpages &&
        subpages.map(({ name, url }: TSubpage) => (
          <Link href={url} key={name}>
            <SubmenuOption>{name}</SubmenuOption>
          </Link>
        ))}
    </SubmenuContainer>
  );
}

Submenu.defaultProps = {
  className: '',
};
