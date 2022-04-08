import React from 'react';
import { useDispatch } from 'react-redux';

import { IOpenModalAction, openModal } from '@redux/actions/modalActions';

import IconButton from '../IconButton';

import FilterByButtonIcon from './FilterByButton.styles';

interface IFilterByButton {
  className?: string;
}
export default function FilterByButton({ className }: IFilterByButton): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = (): IOpenModalAction => dispatch(openModal('filterBy'));

  return <IconButton className={className} icon={<FilterByButtonIcon />} onClick={handleClick} />;
}

FilterByButton.defaultProps = {
  className: '',
};
