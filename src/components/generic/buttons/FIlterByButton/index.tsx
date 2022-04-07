import React from 'react';

import IconButton from '../IconButton';

import FilterByButtonIcon from './FilterByButton.styles';

interface IFilterByButton {
  className?: string;
}
export default function FilterByButton({ className }: IFilterByButton): JSX.Element {
  return (
    <IconButton className={className} icon={<FilterByButtonIcon />} onClick={(): void => {}} />
  );
}

FilterByButton.defaultProps = {
  className: '',
};
