import React from 'react';

interface ICloseIcon {
  className?: string;
}

export default function CloseIcon({ className }: ICloseIcon): JSX.Element {
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
        d="M23.4533 6.66669L16 14.12L8.54663 6.66669L6.66663 8.54669L14.12 16L6.66663 23.4534L8.54663 25.3334L16 17.88L23.4533 25.3334L25.3333 23.4534L17.88 16L25.3333 8.54669L23.4533 6.66669Z"
        fill="black"
      />
    </svg>
  );
}

CloseIcon.defaultProps = {
  className: '',
};
