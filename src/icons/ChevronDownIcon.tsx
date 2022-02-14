import React from 'react';

interface IChevronDownIcon {
  className?: string;
}

export default function ChevronDownIcon({ className }: IChevronDownIcon): JSX.Element {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.51501 8.46501L12 16.95L20.485 8.46501L19.071 7.05001L12 14.122L4.92901 7.05001L3.51501 8.46501Z" />
    </svg>
  );
}

ChevronDownIcon.defaultProps = {
  className: '',
};
