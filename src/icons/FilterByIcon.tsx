import React from 'react';

interface IFilterByIcon {
  className?: string;
}

export default function FilterByIcon({ className }: IFilterByIcon): JSX.Element {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 42H10V38H4V34H10V30H14V42ZM44 38H18V34H44V38ZM34 30H30V26H4V22H30V18.024H34V30ZM44 26H38V22H44V26ZM22 18H18V14H4V10H18V6H22V18ZM44 14H26V10H44V14Z"
        fill="#376EA7"
      />
    </svg>
  );
}

FilterByIcon.defaultProps = {
  className: '',
};
