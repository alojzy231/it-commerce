import React from 'react';

interface IChevronLeftIcon {
  className?: string;
}

export default function ChevronLeftIcon({ className }: IChevronLeftIcon): JSX.Element {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7134 4.68677L9.40002 16.0001L20.7134 27.3134L22.6 25.4281L13.1707 16.0001L22.6 6.5721L20.7134 4.68677Z"
        fill="black"
      />
    </svg>
  );
}

ChevronLeftIcon.defaultProps = {
  className: '',
};
